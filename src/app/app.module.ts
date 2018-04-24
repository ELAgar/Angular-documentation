import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';


// Components
import {AppComponent} from './app.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';


// Directives


// Services
import {CarsService} from './cars.service';


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
    AppRoutingModule,
    HttpModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
