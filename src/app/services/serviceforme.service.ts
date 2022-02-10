import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceformeService {

  subforme = new Subject<any[]>()
  formes!: any[]

  constructor(private http: HttpClient) { }

  emitForme() {
    this.subforme.next(this.formes.slice())
  }

  getFormes() {
    this.http.get<any[]>("http://localhost:3000/formes").subscribe(formes => {
      this.formes = formes
      this.emitForme()
    },
      err => {
        console.log(err)
      })
  }

  addForme(forme: any) {

    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:3000/formes", forme).subscribe(message => {
        resolve(message)
        this.getFormes()
      },
        err => {
          reject(err)
        })
    })

  }
}
