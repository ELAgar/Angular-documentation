import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTest'
})
export class MyTestPipe implements PipeTransform {

  // ng g p my-test --spec=false

  transform(value: any, args?: any): any {
    return null;
  }

}
