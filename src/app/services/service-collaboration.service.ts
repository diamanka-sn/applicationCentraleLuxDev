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
        nom: 'SENEGAL SERVICE',
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
      },
      {
        nom: 'SGBS',
        telephone: "33 844 33 58",
        adresse: "Pikine",
        email: "sgbs@gmail.com",
        tauxPEC: 0.5
      },
      {
        nom: 'NDIAYE ET FRERES',
        telephone: "33 829 11 10",
        adresse: "Ouakam",
        email: "ndiayeetfreres@gmail.com",
        tauxPEC: 0.5
      }
    ];
    this.emitCollaboration() ;
  }

  getCollaborationDetail(id: number){
    const entreprise = this.collaboration[id]
    return entreprise;
  }
}
