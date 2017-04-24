import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import { MovieComponent } from './component/movies/movie.component'
import {MovieDetailComponent} from "./component/movies/movie-detail.component";
import {HomeComponent} from "./component/home/home.component";
import {routing} from "./app.routing";



@NgModule({
  imports:      [ BrowserModule,HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, MovieComponent, MovieDetailComponent ,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
