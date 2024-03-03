import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { UserCreateDto } from '../signup/models/user-create.dto';
import { UserDto } from '../signup/models/user.dto';
import { LoginDto } from '../signin/models/login.dto';
import { TokenResponse } from '../signin/models/token-response.dto';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private path = `${environment.api_products}/customers`;

  constructor(private http: HttpClient) { this.token }

  createUser(user: UserCreateDto) {
    console.log(user);
    return this.http.post<UserDto>(this.path, user);
  }

  login(loginData: LoginDto) {
    console.log(loginData);
    return this.http.post<TokenResponse>(`${environment.api_products}/login`, loginData);
  }

  get token(): any {
    //docidifcar
    const token = localStorage.getItem('token');
    if (token) {
      const decode = jwt_decode.jwtDecode(token);
      console.log('decodificado', decode);
      return decode;
    }
    return null
  }
}
