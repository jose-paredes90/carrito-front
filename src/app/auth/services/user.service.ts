 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { UserCreateDto } from '../signup/models/user-create.dto';
import { UserDto } from '../signup/models/user.dto';
// import { LoginDto } from '../signin/models/login.dto';
// import { TokenResponse } from '../signin/models/token-response.dto';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private path = `${environment.api_products}/customers`;

  constructor(
    private http: HttpClient
    ) { }

  createUser(user: UserCreateDto) {
    console.log(user);
    return this.http.post<UserDto>(this.path, user);
  }

  // login(loginData: LoginDto) {
  //   return this.http.post<TokenResponse>(`${environment.api_products}/login`, loginData);
  // }
}
