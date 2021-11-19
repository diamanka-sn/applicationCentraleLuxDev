import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceutilisateurService {

  subutilisateur = new Subject<any[]>()
  utilisateurs!: any[]

  constructor() { }

  emitUtilisateurs() {
    this.subutilisateur.next(this.utilisateurs.slice())
  }

  getUtilisateurs() {
    this.utilisateurs = [
      {
        nom: 'diallo',
        prenom: 'assane',
        adresse: 'dakar',
        email: 'assane@gmail.com',
        telephone: '77777777',
        profil: 'client'
      },
      {
        nom: 'gueye',
        prenom: 'mouctar',
        adresse: 'dakar',
        email: 'mouctar@gmail.com',
        telephone: '77777347',
        profil: 'vendeur'
      },
      {
        nom: 'cisse',
        prenom: 'yakhouba',
        adresse: 'dakar',
        email: 'yakhouba@gmail.com',
        telephone: '72356777',
        profil: 'client'
      },
      {
        nom: 'diamanka',
        prenom: 'mouhamaou',
        adresse: 'dakar',
        email: 'mouhamadou@gmail.com',
        telephone: '7777',
        profil: 'client'
      },
    ]
    this.emitUtilisateurs()
  }

  addUser(user: any) {
    this.utilisateurs.push(user)
    this.emitUtilisateurs()
  }
}
