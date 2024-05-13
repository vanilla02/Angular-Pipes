import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';

// asterisk for pagenotfound 

export const routes: Routes = [
    {"path":'', "title":"Home", component:HomeComponent},
    {"path":'about', "title":"About Us", component:AboutComponent},
    {"path":'product', "title":"Product", component:ProductComponent},
    {"path":'pipes', "title":"Pipes", component:PipesComponent},
    {"path":'**', "title":"Page Not Found", component:PagenotfoundComponent},
];