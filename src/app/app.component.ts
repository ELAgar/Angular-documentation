import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  headerText = 'Работа с формами.';

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  form: FormGroup;


  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      country: new FormControl('ua'),
      answer: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log('Submitted!', this.form);
  }

}
