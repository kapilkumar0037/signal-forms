import { Component, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, pattern, required, SchemaPathTree } from '@angular/forms/signals';


interface LoginData {
  email: string;
  password: string;
  acceptTnC: boolean;
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
    password: '',
    acceptTnC: false
  })
  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    required(schema.password, { message: 'Password is required' });
    required(schema.acceptTnC, { message: 'You must accept the Terms and Conditions' });
    minLength(schema.password, 8, { message: 'Password must be at least 8 characters' })
    maxLength(schema.password, 25, { message: 'Password is too long' });
    minLength(schema.email, 2, { message: 'Must be at least 2 characters' })

  })
}
