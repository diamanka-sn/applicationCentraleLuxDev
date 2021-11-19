import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemedicamentService {

  medicaments!: any[]
  medocsubject = new Subject<any[]>()

  constructor(private http: HttpClient) {

  }

  emitMedoc() {
    this.medocsubject.next(this.medicaments.slice())
  }

  getMedicament() {
    this.medicaments = [
      {
        libelle: 'paracetamol',
        quantite: 20,
        prixSession: 40.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        libelle: 'paracetamol',
        quantite: 20,
        prixSession: 40.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        libelle: 'paracetamol',
        quantite: 20,
        prixSession: 40.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        libelle: 'paracetamol',
        quantite: 20,
        prixSession: 40.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      }
    ]

    this.emitMedoc()
  }

  ajoutMedicament(medicament: any) {

    this.medicaments.push(medicament)
    this.emitMedoc()

  }
}
