import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { config } from 'src/models/config';

@Injectable({
  providedIn: 'root'
})
export class ServicecommandeService {


  commande!: any[];
  commandesubject = new Subject<any[]>()

  constructor(private http: HttpClient) { }

  emitcommande() {
    this.commandesubject.next(this.commande.slice())
  }
  getNombreCommande(){
    return this.http.get(`${config.apiUrl}/commandeClient/nombre`)
  }


  getcommande() {
    this.commande = [
      {
        date: '12/02/2020',
        cout: '15000'
      },
      {
        date: '12/02/2020',
        cout: '15000'
      },
      {
        date: '12/02/2020',
        cout: '15000'
      },
      {
        date: '12/02/2020',
        cout: '15000'
      },
    ]
    this.emitcommande();
  }

  ajoutcommande(commande: any) {

    this.commande.push(commande)
    this.emitcommande()

  }
}