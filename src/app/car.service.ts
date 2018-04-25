import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
  private isVisible = true;

  constructor() { }

  showCar() {
    this.isVisible = true;
  }

  hideCar() {
    this.isVisible = false;
  }

  getVisibility() {
    return this.isVisible;
  }

}
