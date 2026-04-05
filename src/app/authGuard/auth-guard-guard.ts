import { CanActivateFn, Router } from '@angular/router';
import { Loginservice } from '../services/loginservice';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  

  const loginService = inject(Loginservice);
  const router = inject(Router);

  if (loginService.isLogged()) {
    return true;

  } else {
    router.navigate(['/login']);
    return false;
    
  }
};
