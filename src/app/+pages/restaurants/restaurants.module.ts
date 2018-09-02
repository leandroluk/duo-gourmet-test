import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule as NgCommonModule } from '@angular/common';


import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsFilterComponent } from './restaurants-filter/restaurants-filter.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantsService } from './restaurants.service';
import { CommonModule } from '../../+common/common.module';

@NgModule({
  imports: [
    NgCommonModule,
    FormsModule,
    //
    CommonModule
  ],
  declarations: [
    RestaurantsComponent,
    RestaurantsFilterComponent,
    RestaurantsListComponent
  ],
  exports: [RestaurantsComponent],
  providers: [RestaurantsService]
})
export class RestaurantsModule { }
