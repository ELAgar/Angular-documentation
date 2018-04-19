import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  headerText = 'Работа с формами.';

  @ViewChild('form') form: NgForm;   // Есть такой вариант

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';
  formData = [];
  isSubmitted = false;

  constructor() {}

  ngOnInit() {
  }

  addRandEmail() {
    const randEmail = 'mejibuh@gmail.com';
    // this.form.setValue({ // setValue() требует задания значений всем полям
    //   user: {
    //     password: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({ // patchValue() не требует задания значений всем полям
      user: {
        email: randEmail
      }
    });
  }

  submitForm() {
    // console.log(this.form.value);
    this.isSubmitted = true;
    this.formData.push(this.form.value);
    this.form.reset();
  }

}
