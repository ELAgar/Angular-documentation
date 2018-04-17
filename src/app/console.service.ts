import {Injectable} from '@angular/core';

@Injectable()
export class ConsoleService {
  log(str: string) {
    console.log(str);
  }
}
