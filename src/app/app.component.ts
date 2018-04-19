import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

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
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      country: new FormControl('ua', Validators.required),
      answer: new FormControl('yes', Validators.required)
    });
  }

  onSubmit() {
    console.log('Valid: ' + this.form.valid);
    console.log(this.form.value);
  }

}
