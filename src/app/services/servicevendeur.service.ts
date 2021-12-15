import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicevendeurService {
  subvendeur = new Subject<any[]>()
  vendeurs!: any[]

  constructor() { }

  emitvendeurs() {
    this.subvendeur.next(this.vendeurs.slice())
  }

  getvendeurs() {
    this.vendeurs = [
      {
        nom: 'diallo',
        prenom: 'assane',
        adresse: 'dakar',
        email: 'assane@gmail.com',
        telephone: '773670972',
        profil: 'vendeur',
        motDePass: ''
      },
      {
        nom: 'gueye',
        prenom: 'mouctar',
        adresse: 'dakar',
        email: 'mouctar@gmail.com',
        telephone: '763457789',
        profil: 'vendeur',
        motDePass: ''
      },
      {
        nom: 'cisse',
        prenom: 'yakhouba',
        adresse: 'dakar',
        email: 'yakhouba@gmail.com',
        telephone: '707892507',
        profil: 'vendeur',
        motDePass: ''
      },
      {
        nom: 'diamanka',
        prenom: 'mouhamaou',
        adresse: 'dakar',
        email: 'mouhamadou@gmail.com',
        telephone: '765429081',
        profil: 'vendeur',
        motDePass: ''
      },
    ]
    this.emitvendeurs()
  }

  addvendeur(vendeur: any) {
    this.vendeurs.push(vendeur)
    this.emitvendeurs()
  }
}
