import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceauthentificationService {

  isAuth: boolean = false
  subjauth = new Subject<boolean>()
  constructor(private routes: Router, private http: HttpClient) { }

  connexion(login: string, mp: string) {
    if (login === "assane" && mp === "12345678") {
      localStorage.setItem('token', "assane est le bienvenue")
      this.isAuth = true
      this.routes.navigate(['/espace'])
    }

    // if (this.isAuth) {
    //   this.routes.navigate(['/espace'])
    // }

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
}

