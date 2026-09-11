import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css',
})
export class ReactComponent {
  signUpForm: FormGroup;
  ngOnInit() {
    this.signUpForm = new FormGroup({
      addresseMail: new FormControl('nidhal', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, Validators.required),
    });
  }

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
