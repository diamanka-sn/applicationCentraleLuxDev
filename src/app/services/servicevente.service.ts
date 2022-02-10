import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceventeService {

  subvente = new Subject<any[]>();
  ventes!: any[];

  constructor(private http: HttpClient) { }

  emitVentes() {
    this.subvente.next(this.ventes.slice());
  }

  getVentes() {
    // this.ventes = [
    //   {
    //     idVente: "1",
    //     dateVente: "10/09/2021",
    //     montant: "23 700"
    //   },
    //   {
    //     idVente: "2",
    //     dateVente: "10/09/2021",
    //     montant: "50 450"
    //   },
    //   {
    //     idVente: "3",
    //     dateVente: "10/09/2021",
    //     montant: "1 600"
    //   },
    //   {
    //     idVente: "4",
    //     dateVente: "10/09/2021",
    //     montant: "38 050"
    //   },
    // ];
    this.http.get<any[]>('http://localhost:3000/ventesimples').subscribe(ventes => {
      this.ventes = ventes
      this.emitVentes();
    }, err => {
      console.log(err)
    })


  }

  getVente(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:3000/ventesimples/" + id).subscribe(vente => {
        resolve(vente)
      }, err => {
        reject(err)
      })
    })
  }

  addVente(vente: any) {
    this.ventes.push(vente);
    this.emitVentes();
  }


}
