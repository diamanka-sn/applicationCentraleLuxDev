import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicerayonService {


  rayon!: any[];
  rayonsubject = new Subject<any[]>()

  constructor(private http: HttpClient) { }

  emitrayon() {
    this.rayonsubject.next(this.rayon.slice())
  }

  getrayon() {
    this.rayon = [
      {
        libelle: 'Deparasitant',

      },
      {
        libelle: 'anti douleur',

      },
      {
        libelle: 'Douleur et Fiévre',

      },
      {
        libelle: 'Antibiotique',

      },
    ]
    this.emitrayon();
  }

  ajoutrayon(rayon: any) {

    this.rayon.push(rayon)
    this.emitrayon()

  }
}
