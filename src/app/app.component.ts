import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerText = 'Фильтрация данных с помощью пайпа.';

  searchCar = '';
  cars = [
    {name: 'Ford', description: 'WFM 1'},
    {name: 'Mazda', description: 'WFM 2'},
    {name: 'Bentley', description: 'WFM 3'},
    {name: 'Audi', description: 'WFM 4'},
    {name: 'Mercedes', description: 'WFM 5'},
    {name: 'BMW', description: 'WFM 6'}
  ];

  addCar() {
    this.cars.push({
      name: 'New Car',
      description: 'WFM'
    });
  }

}
