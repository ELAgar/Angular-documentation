import {Component, OnInit} from '@angular/core';
import {divTrigger} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger]
})
export class AppComponent implements OnInit {
  title = 'Работа с анимацией.';
  isVisible = false;

  constructor() {
  }

  ngOnInit() {
  }

}
