import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SignupService } from '../services/user.service';
// import { LoginDto } from './models/login.dto';
// import { TokenResponse } from './models/token-response.dto';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  hide = true;
  loginForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<SigninComponent>,
    private signupService: SignupService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8)
      ]),
    });
  }

  onToggleVisibility() {
    this.hide = !this.hide;
    console.log('Visibility toggled. New value:', this.hide);
  }
  cerrarDialog() {
    this.dialogRef.close();
  }

//   onSumbmit() {
//     const loginData = this.loginForm.value;
//     const storedEmail = localStorage.getItem('email');
//     const storedPassword = localStorage.getItem('password');
//     // const login: LoginDto = {
//     //   email: loginData.email,
//     //   password: loginData.password,
//     // }
//     // this.signupService.login(login).subscribe(
//     //   (response: TokenResponse) => {
//     //     console.log(response.token);
//     //     //{
//     //     // next: (response: TokenResponse) => {
//     //     //   console.log('Login exitoso', response);

//     //     //   // Almacenar el token en el localStorage
//     //     //   localStorage.setItem('currentUserToken', response.token);

//     //     //   // Cerrar el modal después de obtener el token
//     //     //   this.dialogRef.close();
//     //     // },
//     //     // error: (loginError) => {
//     //     //   console.error('Error en el login', loginError);
//     //     //   // Puedes manejar el error aquí si es necesario
//     //     // }
//     //     //}
//     //   }
//     // );
//     // Verifica si las credenciales están presentes en el localStorage
// if (storedEmail && storedPassword) {
//   const loginData: LoginDto = {
//     email: storedEmail,
//     password: storedPassword,
//   };

//   this.signupService.login(loginData).subscribe({
//     next: (response) => {
//       console.log('Inicio de sesión exitoso', response);

//       // Almacena el token en el localStorage
//       localStorage.setItem('currentUserToken', response.token);

//       // Puedes realizar otras acciones después del inicio de sesión exitoso
//     },
//     error: (loginError) => {
//       console.error('Error en el inicio de sesión', loginError);
//       // Puedes manejar el error aquí si es necesario
//     }
//   });
// }

//   }
}

