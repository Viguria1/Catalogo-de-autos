import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe(); // evita múltiples llamadas
      if (user) {
        resolve(true); // usuario autenticado
      } else {
        router.navigate(['/']); // redirige al inicio
        resolve(false);
      }
    });
  });
};
