import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


// Components
import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';


// Directives
import {ColorDirective} from './color/color.directive';


// Services


// Pipes


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
