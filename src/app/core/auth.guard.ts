import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

//RXJS
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    return Observable.from(this.afAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(loggedIn => {
        if (!loggedIn) {
          console.log('Access Denied!');
          this.router.navigate(['login']);
        }
      })
  }

  // canActivateChild( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
  //   return this.authService.isLoggedIn().take(1);
  // }
}
