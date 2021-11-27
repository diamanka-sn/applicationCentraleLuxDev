import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedepenseService {

  subDepense = new Subject<any[]>() ;
  depenses!: any[] ;


  constructor() { }

  emitDepenses() {
    this.subDepense.next(this.depenses.slice())
  }

  getAllDepenses() {
    this.depenses = [
      {
        description: 'frais de service',
        montant: "25 000",
        date: "19/11/2021",
      },
      {
        description: "Paiement facture d'eau",
        montant: "17 400",
        date: "05/11/2021",
      },
    ];
    this.emitDepenses() ;
  }
  // addDepense(user:any) {
  //   this.depenses.push(); 
  //   this.emitDepenses() ;
  // }

}
