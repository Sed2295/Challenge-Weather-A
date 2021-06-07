import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes';
//Importacion para poder hacer peticiones
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
