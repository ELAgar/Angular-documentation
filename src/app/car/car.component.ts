import {Component, Input, OnInit} from '@angular/core';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car;

  constructor(private consoleService: ConsoleService) {
  }

  ngOnInit() {
  }

  getClass() {
    return {
      'success': !this.car.isSold,
      'danger': this.car.isSold,
      'item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
    this.consoleService.log(`${this.car.name} status = ${type}!`);
  }

}
