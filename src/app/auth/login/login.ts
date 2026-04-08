import { Component, ChangeDetectorRef } from '@angular/core';
import { LoginRequest } from '../../interface/login-request';
import { Loginservice } from '../../services/loginservice';
import { Router } from '@angular/router';
import { finalize, timeout } from 'rxjs/operators';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private loginService: Loginservice, private notificationService: NotificationService, private router: Router, private cdr: ChangeDetectorRef) {}

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
        this.notificationService.sucess("Bem-vindo de volta!")
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(["/"]);
      },
      error: (err) => {
        const msg = err.error?.message || err.error || "Erro ao entrar. Por favor tente novamente";
        this.notificationService.error(msg);
      }
    });
  }
}
