import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BonClient } from 'src/models/BonClient.models';

@Injectable({
  providedIn: 'root'
})
export class ServicebonClientService {



  bonClient!: any[];
  bonClientsubject = new Subject<any[]>()

  constructor(private http: HttpClient) { }

  emitbonClient() {
    this.bonClientsubject.next(this.bonClient.slice())
  }

  getbonClient() {
    this.bonClient = [
      {
        id: '1',
        nom: 'diallo',
        prenom: 'assane',
        adresse: 'dakar',
        email: 'assane@gmail.com',
        telephone: '77 777 43 23',
        solde: '18000'
      },
      {
        id: '2',
        nom: 'gueye',
        prenom: 'mouctar',
        adresse: 'dakar',
        email: 'mouctar@gmail.com',
        telephone: '77 777 34 71',
        solde: '16000'
      },
      {
        id: '3',
        nom: 'cisse',
        prenom: 'yakhouba',
        adresse: 'dakar',
        email: 'yakhouba@gmail.com',
        telephone: '78 235 67 77',
        solde: '26000'
      },
      {
        id: '4',
        nom: 'diamanka',
        prenom: 'mouhamaou',
        adresse: 'dakar',
        email: 'mouhamadou@gmail.com',
        telephone: '77 772 34 56',
        solde: '74000'
      },
    ]
    this.emitbonClient();
  }


  getSingleBonClient(id: number) {
    console.log("ddddddddddd");
    const bonClient = this.bonClient.find(
      (_bon: any) => {
        return _bon.id === id;
      }
    );
    return bonClient;
  }

  ajoutbonClient(bonClient: any) {

    this.bonClient.push(bonClient)
    this.emitbonClient()

  }

  crediter(solde: any) {
    console.log("++++++++++++methode crediter++++++++++");
    console.log(solde);
  }

  debiter(solde: any) {
    console.log("+++++++++++methode debiter+++++++++++");
    console.log(solde);
  }

}