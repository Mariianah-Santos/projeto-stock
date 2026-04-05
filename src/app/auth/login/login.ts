import { Component, ChangeDetectorRef } from '@angular/core';
import { LoginRequest } from '../../interface/login-request';
import { Loginservice } from '../../services/loginservice';
import { Router } from '@angular/router';
import { finalize, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private loginService: Loginservice, private router: Router, private cdr: ChangeDetectorRef) {}

  loading = false;
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
    this.loading = true;
     this.loginService.auth(this.loginData).pipe(
      finalize(() => {
        this.loading = false;
        this.cdr.detectChanges();
      })
    ).subscribe({
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
