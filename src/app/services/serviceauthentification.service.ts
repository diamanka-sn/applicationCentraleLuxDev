import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceauthentificationService {

  isAuth: boolean = false
  subjauth = new Subject<any>()
  constructor(private routes: Router, private http: HttpClient) { }

  connexion(login: string, mp: string) {
    if (login === "assane" && mp === "12345678") {
      this.isAuth = true
    }

    if (this.isAuth) {
      this.routes.navigate(['/espace'])
    }

  }
}

