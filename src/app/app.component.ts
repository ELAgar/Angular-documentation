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
      state('active', style({
        backgroundColor: 'red',
        width: '170px',
        height: '170px',
        margin: '50px'
      })),
      transition('start <=> end', animate('800ms 0.5s ease-in-out')),
      transition('start => active', animate(400)),
      transition('active => end', animate(1000))
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        border: '5px solid silver'
      })),
      state('end', style({
        width: '170px',
        height: '170px',
        background: 'skyblue'
      })),
      transition('start <=> end', [
        style({
          background: 'red' // сразу красный
        }),
        animate(1500, style({
          background: 'yellow' // переход за 1.5 сек в желтый
        })),
        animate(1000, style({
          background: 'green', // переход за сек в зелёный
          width: '200px',
          height: '200px',
        })),
        animate(1000) // переход за сек в сосотояние end, в синий
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Работа с анимацией.';
  clickedDivState = 'start';
  multiState = 'start';

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
