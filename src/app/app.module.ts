import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';


// Components
import {AppComponent} from './app.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CarPageComponent} from './car-page/car-page.component';
import {NotFoundComponent} from './not-found/not-found.component';


// Directives


// Services
import {CarsService} from './cars.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';


// Pipes


@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
    CarPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CarsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
