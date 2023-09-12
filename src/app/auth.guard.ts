import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let router = inject(Router);
  
  return auth.user$.pipe(
    map(user => {
    if (user) return true; 

    router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;

  })
  );
}
