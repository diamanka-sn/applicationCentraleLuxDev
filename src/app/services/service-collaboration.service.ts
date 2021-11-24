import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCollaborationService {

  subCollaboration = new Subject<any[]>() ;
  collaboration!: any[] ;

  constructor() { }

  emitCollaboration() {
    this.subCollaboration.next(this.collaboration.slice()) ;
  }
  getAllColaboration() {
    this.collaboration = [
      {
        nom: 'E-Corp',
        telephone: "77 111 22 33",
        adresse: "Saint Louis",
        email: "ecorp@gmail.com",
        tauxPEC: 0.5
      },
      {
        nom: 'Senegal-TECH',
        telephone: "33 012 21 23",
        adresse: "Dakar",
        email: "stechp@gmail.com",
        tauxPEC: 0.5
      }
    ];
    this.emitCollaboration() ;
  }
}
