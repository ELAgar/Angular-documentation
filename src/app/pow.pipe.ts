import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  transform(value: any, powNum: number = 1, symb: string = '') {
    return symb + ' ' + value ** powNum;
  }

}
