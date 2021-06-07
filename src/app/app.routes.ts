import {RouterModule,Routes} from '@angular/router';
import { CountryComponent } from './components/country/country.component';
//import {HomeComponent } from './components/home/home.component';


const APP_ROUTES:Routes = [
    { path: 'home', component: CountryComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];
//useHash sirve para manejar los parametros en la url con el simbolo # (hash)
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);