import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  headerText = 'Работа с формами.';

  // @ViewChild('form') form: NgForm;    // Есть такой вариант

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(form.value);
  }

}
