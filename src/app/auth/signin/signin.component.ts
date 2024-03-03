import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../services/user.service';
import { LoginDto } from './models/login.dto';
import { TokenResponse } from './models/token-response.dto';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  hide = true;
  loginForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<SigninComponent>,
    private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
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

  login() {
    const loginData = this.loginForm.value;
    console.log(loginData);
    const login: LoginDto = {
      email: loginData.email,
      password: loginData.password,
    }
    this.loginService.login(login).subscribe({

      next: (response: TokenResponse) => {
        console.log('Login exitoso', response);

        // Almacenar el token en el localStorage
        localStorage.setItem('token', response.token);

        // Cerrar el modal después de obtener el token
        this.dialogRef.close();
      },
      error: (loginError) => {
        console.error('Error en el login', loginError);
        // Puedes manejar el error aquí si es necesario
      }
    });
  }
}

