import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  appTitle;

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

}
