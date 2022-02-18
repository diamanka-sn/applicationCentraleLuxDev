import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypepaiementService {

  subtypepayement = new Subject<any[]>();
  types!: any[];

  constructor(private http: HttpClient) { }

  emitPaiement() {
    this.subtypepayement.next(this.types.slice())
  }

  getTypePaiement() {
    this.http.get<any[]>("http://localhost:3000/typepaiements").subscribe((types) => {
      this.types = types
      this.emitPaiement()
    })
  }

  addTypePaiement(types: any) {
    console.log(types)
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:3000/typepaiements/", types).subscribe((types) => {
        resolve(types)
      },
        err => {
          reject(err)
        })
    })
  }
}
