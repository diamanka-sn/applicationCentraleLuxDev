import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ServiceauthentificationService } from '../services/serviceauthentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthmiddlewareService implements CanActivate {
  isAuth!: boolean;
  serviceAuth !: Subscription
  constructor(private serviceAuthentification: ServiceauthentificationService, private route: Router) {
    // this.serviceAuth = this.serviceAuthentification.subjauth.subscribe((auth: boolean) => {
    //   console.log('valeur auth ' + auth)
    //   this.isAuth = auth

    // })

    // this.serviceAuthentification.getToken()
    this.getToken()
  }
  getToken() {
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') !== null) {

      this.isAuth = true
    }
    else {
      this.isAuth = false
    }
  }

  canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuth) {
      return true
    }
    return this.route.navigate(['/'])

  }
}
