import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  charsCount = 7;


  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl('', [
          Validators.required,
          this.chekForlength.bind(this) // bind(this) задаёт область видимости нашего класса
        ]),
      }),
      country: new FormControl('ua', Validators.required),
      answer: new FormControl('yes', Validators.required)
    });
  }

  // my validator
  chekForlength(control: FormControl) {
    if (control.value.length <= (this.charsCount - 1)) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  onSubmit() {
    console.log('Valid: ' + this.form.valid);
    console.log(this.form.controls);
  }

}
