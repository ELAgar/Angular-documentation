import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


// Components
import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {CarAddComponent} from './car-add/car-add.component';


// Directives


// Services
import {ConsoleService} from './console.service';
import {CarsService} from './cars.service';


// Pipes


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConsoleService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
