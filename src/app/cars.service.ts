import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarsService {

  constructor(private http: Http) {
  }

  // GET
  getCars() {
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.get('http://localhost:3000/cars', {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((err: Response) => {
        return Observable.throw('Сервер недоступен, попробуйте позже!');
      });
  }


  // POST
  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data)
      .map((response: Response) => response.json());
  }


  // PUT
  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => response.json());
  }


  // DELETE
  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => response.json());
  }

}
