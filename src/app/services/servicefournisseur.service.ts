import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicefournisseurService {

  subFournisseur = new Subject<any[]>();
  fournisseurs!: any[];

  constructor() { }

  emitFournisseurs() {
    this.subFournisseur.next(this.fournisseurs.slice());
  }

  getAllFournisseurs() {
    this.fournisseurs = [
      {
        nomStructure: 'DUOPHARM',
        telephone: "33 869 05 22",
        adresse: "Dakar",
        email: "duapharm@gmail.com",

      },
      {
        nomStructure: 'SODIPHARM',
        telephone: "33 859 00 00",
        adresse: "Fann Bel-Air",
        email: "sodipharm.@gmail.com",

      },
      {
        nomStructure: 'LABOREX',
        telephone: "33 869 02 02",
        adresse: "Corniche des HLM",
        email: "laborex@gmail.com",
      }
    ];
    this.emitFournisseurs()
  }

  addFournisseur(fournisseur: any) {
    this.fournisseurs.push(fournisseur);
    this.emitFournisseurs();
  }
}
