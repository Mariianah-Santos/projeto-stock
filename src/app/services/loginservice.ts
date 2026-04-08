import { Injectable } from '@angular/core';
import { LoginRequest } from '../interface/login-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class Loginservice {

  constructor(private http: HttpClient) {

  }

  private apiUrlLogin = "https://estoque-boux.onrender.com/responsible/login";


  auth(data: LoginRequest) {
    return this.http.post(this.apiUrlLogin, data);
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLogged() {
    return !!this.getUser();
  }

  logout() {
    localStorage.removeItem('user');
  }

}
