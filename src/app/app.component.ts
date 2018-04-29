import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '200px',
        height: '200px',
        margin: '50px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px',
        margin: '50px'
      })),
      transition('start => end', animate('800ms 0.5s ease-in')),
      transition('end => start', animate('800ms 0.5s ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Работа с анимацией.';
  clickedDivState = 'start';

  constructor() {
  }

  ngOnInit() {
  }

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 2000);
  }

}
