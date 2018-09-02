import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from './+common/common.module';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
