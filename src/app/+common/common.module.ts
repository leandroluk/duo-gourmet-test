import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

export const COMMON_EXPORTS = [
  NavbarComponent,
  LoaderComponent,
  RatingStarsComponent
];

@NgModule({
  imports: [
    NgCommonModule
  ],
  declarations: COMMON_EXPORTS,
  exports: COMMON_EXPORTS
})
export class CommonModule { }
