import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const adminAuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  let auth = inject(AuthService); 
  
  return auth.appUser$.pipe(
    map(appUser => appUser.isAdmin)
  ) // correct approach to use the pipe, switchMap and Map
};