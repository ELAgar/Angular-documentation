import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class CarsService {

  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2017,
      color: 'red'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2007,
      color: 'blue'
    },
    {
      name: 'BMW',
      id: 3,
      year: 2005,
      color: 'grey'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2000,
      color: 'yellow'
    }
  ];

  constructor(private http: Http) {
  }

  getAppTitle() {
    return this.http.get('http://localhost:3000/title')
      .map((res: Response) => res.json())
      .map((data) => data.value);
  }

}
