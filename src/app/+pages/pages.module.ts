import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { RestaurantsModule } from './restaurants/restaurants.module';

@NgModule({
  imports: [
    CommonModule,
    //
    PagesRoutingModule,
    RestaurantsModule
  ],
})
export class PagesModule { }
