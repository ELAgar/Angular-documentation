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
  colors = [
    'red', 'blue', 'green',
    'pink', 'yellow', 'grey',
    'pink', 'yellowgreen', 'purple',
    'lightgreen', 'orange', 'skyblue'
  ];

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  // GET
  loadCars() {
    this.carsService
      .getCars()
      .subscribe(
        (cars: Cars[]) => { this.cars = cars; },
        (err) => { alert(err); }
      );
  }

  // POST
  addCar() {
    this.carsService.addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  // PUT
  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => console.log(data));
  }

  getRandColor() {
    const randNumber = Math.round(1 + Math.random() * (this.colors.length - 1));
    return this.colors[randNumber];
  }

  // DELETE
  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe(() => {
        this.cars = this.cars.filter(c => c.id !== car.id);
        // если c.id !== car.id(**айди машины которую мы сейчас удаляем**), то занести его в объект
      });
  }

}
