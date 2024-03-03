import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidationService } from 'src/app/services/password-validation.service';
import { LoginService } from '../services/user.service';
import { UserCreateDto } from './models/user-create.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private passwordValidationService: PasswordValidationService,
    private loginService: LoginService, private router: Router
  ) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      lastname: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      document: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      country: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8),
        Validators.pattern(this.passwordValidationService.StrongPasswordRegx)
      ]),
    });
  }

  createUser() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      const formValue = this.signUpForm.value;

      const userRequest: UserCreateDto = {
        name: formValue.username,
        lastname: formValue.lastname,
        address: formValue.address,
        document: +formValue.document,
        email: formValue.email,
        phone: +formValue.phone,
        country: formValue.country,
        password: formValue.password,
      };
      this.loginService.createUser(userRequest)
        .subscribe({
          next: (response) => {
            console.log('Usuario creado con éxito', response);
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error al crear el usuario', error);
          }
        })
    }
  }
}
