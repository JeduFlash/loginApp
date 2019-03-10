import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take , map ,tap } from 'rxjs/operators';

import { AuthService } from '../servicios/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.afAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !! authState))
      .pipe(tap(authenticated => {
        if(!authenticated){
          this.router.navigate(['/login']);
        }
      }
     ));
  }
  
}
