import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceventeService {

  subvente = new Subject<any[]>() ;
  ventes!: any[] ;

  constructor() { }

  emitVentes() {
    this.subvente.next(this.ventes.slice()) ;
  }

  getVentes() {
    this.ventes = [
      {
        idVente: "1",
        dateVente: "10/09/2021",
        montant: "23 700"
      },
      {
        idVente: "2",
        dateVente: "10/09/2021",
        montant: "50 450"
      },
      {
        idVente: "3",
        dateVente: "10/09/2021",
        montant: "1 600"
      },
      {
        idVente: "4",
        dateVente: "10/09/2021",
        montant: "38 050"
      },
    ];
    this.emitVentes() ;
  }

  addVente(vente: any) {
    this.ventes.push(vente) ;
    this.emitVentes() ;
  }


}
