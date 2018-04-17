import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


// Components
import {AppComponent} from './app.component';


// Directives


// Services


// Pipes
import {PowPipe} from './pow.pipe';
import { MyTestPipe } from './my-test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    MyTestPipe
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
