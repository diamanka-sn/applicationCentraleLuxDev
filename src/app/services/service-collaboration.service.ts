import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCollaborationService {

  subCollaboration = new Subject<any[]>();
  collaboration!: any[];

  constructor() { }
 
  emitCollaboration() {
    this.subCollaboration.next(this.collaboration.slice());
  }
  getAllColaboration() {
    this.collaboration = [
      {
        nom: 'SENEGAL SERVICE',
        telephone: "771112233",
        adresse: "Saint Louis",
        email: "ecorp@gmail.com",
        tauxPEC: 0.5
      },
      {
        nom: 'Senegal-TECH',
        telephone: "330122123",
        adresse: "Dakar",
        email: "stechp@gmail.com",
        tauxPEC: 0.5
      },
      {
        nom: 'SGBS',
        telephone: "338443358",
        adresse: "Pikine",
        email: "sgbs@gmail.com",
        tauxPEC: 0.5
      },
      {
        nom: 'NDIAYE ET FRERES',
        telephone: "338291110",
        adresse: "Ouakam",
        email: "ndiayeetfreres@gmail.com",
        tauxPEC: 0.5
      }
    ];
    this.emitCollaboration();
  }

  ajouterCollaboration(e: any) {
    this.collaboration.push(e)
    this.emitCollaboration()
  }

  getCollaborationDetail(id: number){
    const entreprise = this.collaboration[id]
    return entreprise;
  }
}
