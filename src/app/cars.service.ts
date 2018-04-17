import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  constructor() {}

  addCar(name: string) {
    this.cars.push({ isSold: false, name });
  }

}
