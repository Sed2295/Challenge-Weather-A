import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  cities: string [] = ['Buenos Aires,ar','Bogota,col','Ciudad de Mexico,mx','Madrid,es','Lima,pe'];
  city: any[] = [];

  constructor(private __serviceCountry: CountryService ) { }
  
  ngOnInit(): void {
    this.cities.forEach( element => {
      this.__serviceCountry.getWeather(element).subscribe( country => {
        this.city.push(country)
      })
    })
    console.log( this.city );
  }
  card(city:string) {
    console.log(`Diste clic en la card: ${city}`)
    this.__serviceCountry.getForecast(city).subscribe( forecast => {
      //console.log(forecast);
    })
  }
}
