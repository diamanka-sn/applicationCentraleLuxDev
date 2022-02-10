import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicefournisseurService {

  subFournisseur = new Subject<any[]>();
  fournisseurs!: any[];

  constructor(private http: HttpClient) { }

  emitFournisseurs() {
    this.subFournisseur.next(this.fournisseurs.slice());
  }

  getAllFournisseurs() {
    // this.fournisseurs = [
    //   {
    //     nomStructure: 'DUOPHARM',
    //     telephone: "33 869 05 22",
    //     adresse: "Dakar",
    //     email: "duapharm@gmail.com",

    //   },
    //   {
    //     nomStructure: 'SODIPHARM',
    //     telephone: "33 859 00 00",
    //     adresse: "Fann Bel-Air",
    //     email: "sodipharm.@gmail.com",

    //   },
    //   {
    //     nomStructure: 'LABOREX',
    //     telephone: "33 869 02 02",
    //     adresse: "Corniche des HLM",
    //     email: "laborex@gmail.com",
    //   }
    // ];

    this.http.get<any[]>("http://localhost:3000/fournisseurs").subscribe(fournisseurs => {
      this.fournisseurs = fournisseurs
      this.emitFournisseurs()
    },
      err => {
        console.log(err)
      })

  }

  addFournisseur(fournisseur: any) {
    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:3000/fournisseurs", fournisseur).subscribe(fournisseur => {
        resolve(fournisseur)
      },
        err => {
          reject(err)
        }
      )
    })
  }
}
