import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {

  subclient = new Subject<any[]>()
  clients!: any[]

  constructor() { }

  emitclients() {
    this.subclient.next(this.clients.slice())
  }

  getclients() {
    this.clients = [
      {
        nom: 'diallo',
        prenom: 'assane',
        adresse: 'dakar',
        email: 'assane@gmail.com',
        telephone: '707320981',
        profil: 'client',
        motDePass: ''
      },
      {
        nom: 'gueye',
        prenom: 'mouctar',
        adresse: 'dakar',
        email: 'mouctar@gmail.com',
        telephone: '776320347',
        profil: 'client',
        motDePass: ''
      },
      {
        nom: 'cisse',
        prenom: 'yakhouba',
        adresse: 'dakar',
        email: 'yakhouba@gmail.com',
        telephone: '784356777',
        profil: 'client',
        motDePass: ''
      },
      {
        nom: 'diamanka',
        prenom: 'mouhamaou',
        adresse: 'dakar',
        email: 'mouhamadou@gmail.com',
        telephone: '765429081',
        profil: 'client',
        motDePass: ''
      },
    ]
    this.emitclients()
  }

  addclient(client: any) {
    this.clients.push(client)
    this.emitclients()
  }
}
