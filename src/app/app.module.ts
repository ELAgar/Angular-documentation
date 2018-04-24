import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


// Components
import {AppComponent} from './app.component';


// Directives


// Services
import {CarsService} from './cars.service';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';


// Pipes


@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
