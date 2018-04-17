import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false // по-умолчанию: true, если false - то используется для динамического использования фильтра, использовать очень аккуратно, задействует больше вызовов
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchString: string, fieldName: string): any {
    console.log('Filter pipe started');

    if (carList.length === 0 || searchString === '') {
      return carList;
    }

    return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
