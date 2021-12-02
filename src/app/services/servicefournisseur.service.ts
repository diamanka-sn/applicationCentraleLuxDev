import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicefournisseurService {

  subFournisseur = new Subject<any[]>() ;
  fournisseurs!: any[] ;

  constructor() { }

  emitFournisseurs() {
    this.subFournisseur.next(this.fournisseurs.slice()) ;
  }

  getAllFournisseurs() {
    this.fournisseurs = [
      {
        nomStructure: 'DUOPHARM',
        telephone: "33 869 05 22",
        adresse: "Dakar",
        email: "",
  
      },
      {
        nomStructure: 'SODIPHARM',
        telephone: "33 859 00 00",
        adresse: "Fann Bel-Air",
        email: "",
  
      },
      {
        nomStructure: 'LABOREX',
        telephone: "33 869 02 02",
        adresse: "Corniche des HLM",
        email: "",
      }
    ];
    this.emitFournisseurs()
  }

  addFournisseur(fournisseur: any) {
    this.fournisseurs.push(fournisseur);
    this.emitFournisseurs() ;
  }
}
