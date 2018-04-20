import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  headerText = 'Работа с HTTP запросами.';
  // =======================================
  cars: Cars[] = [];
  carName = '';

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => this.cars = cars);
  }

  addCar() {
    this.carsService.addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

}
