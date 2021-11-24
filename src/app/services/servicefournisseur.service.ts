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
        nomStructure: 'Pharma Distribution',
        telephone: "77 000 11 22",
        adresse: "Ouakam",
        email: "pharmadist@gmail.com",
  
      },
      {
        nomStructure: 'Santté Prio',
        telephone: "76 223 35 18",
        adresse: "Plâteau",
        email: "santeprio@gmail.com",
  
      },
      {
        nomStructure: 'Xelcom',
        telephone: "77 666 56 33",
        adresse: "Nord Foire",
        email: "xelcom@gmail.com",
      }
    ];
    this.emitFournisseurs()
  }

  addFournisseur(fournisseur: any) {
    this.fournisseurs.push(fournisseur);
    this.emitFournisseurs() ;
  }
}
