import {Component, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carName = '';

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  addCar() {
    this.carsService.addCar(this.carName);
    this.carName = '';
  }

}
