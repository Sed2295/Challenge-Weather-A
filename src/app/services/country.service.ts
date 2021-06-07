import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  country: any [] = [];
  forecast: any [] = [];
  constructor( private http:HttpClient ) {}
  
  getWeather(country:string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=455fde1c7e835780be24c20c008a06f9`)
      .pipe( map( (resultado:any) => {
        return ({
          name: resultado.name,
          code: country,
          temp: resultado.main.temp,
          humidity: resultado.main.humidity,
          wind: resultado.wind.speed    
        })
      }))
  }
  getForecast(country:string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ country }&appid=455fde1c7e835780be24c20c008a06f9`)
      .pipe( map( (resultado:any) => {
        resultado.list.forEach( (res:any) => {
          let hour = String(res.dt_txt.split(' ')[1]);
          if(hour == '06:00:00' || hour == '12:00:00' || hour == '18:00:00' ) {
            let obj = {
              date: res.dt_txt,
              temp: res.main.temp,
              hour,
              humidity: res.main.humidity,
              wind: res.wind.speed
            }
            this.forecast.push( obj )
          }          
        })
        console.log(this.forecast);
        //console.log(resultado.list);
      }))
  }
}