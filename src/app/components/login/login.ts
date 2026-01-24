import { Component, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals';


interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  loginModel = signal<LoginData>({
    email: '',
    password: ''
  })
  loginForm = form(this.loginModel, (schema)=> {
    required(schema.email, {message: 'Email is required'});
    required (schema.password, {message: 'Password is required'});
    minLength(schema.password, 8, { message: 'Password must be at least 8 characters' })
    maxLength(schema.password, 25, { message: 'Password is too long' })

  })

  // ngOnInit() {
  //   this.loginForm.email().value.set('kapil@gmail.com')
  // }
}
