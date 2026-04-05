import { Component } from '@angular/core';
import { LoginRequest } from '../../interface/login-request';
import { Loginservice } from '../../services/loginservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private loginService: Loginservice, private router: Router) {}

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(['/']);
    }
  }

  loginData: LoginRequest = {
    email: "",
    password: ""
  }

  login() {
     this.loginService.auth(this.loginData).subscribe({
      next: (res) => {
        console.log('Login OK', res);
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(["/"]);
      },
      error: (err) => {
        console.log("erro ao fazer login", err.error);
      }
    });
  }
}
