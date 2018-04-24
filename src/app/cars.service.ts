import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class CarsService {

  cars = [
    {
      name: 'Ford',
      id: 1
    },
    {
      name: 'Audi',
      id: 2
    },
    {
      name: 'BMW',
      id: 3
    },
    {
      name: 'Mercedes',
      id: 4
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
