import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


// Components
import {AppComponent} from './app.component';


// Directives
import {BgDirective} from './Directives/bg.directive';


// Services


@NgModule({
  declarations: [
    AppComponent,
    BgDirective
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
