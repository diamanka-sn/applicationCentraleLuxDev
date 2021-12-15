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
        id: 1,
        libelle: 'doliprane comprimé 500mg',
        quantite: 20,
        prixSession: 40.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 2,
        libelle: 'effaralgan sirop 1000mg',
        quantite: 20,
        prixSession: 30.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 3,
        libelle: 'paracetamol comprimé 50mg',
        quantite: 20,
        prixSession: 50.00,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 4,
        libelle: 'genset comprimé 20ml',
        quantite: 10,
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

  getMedicamentDetail(id: number) {
    const medicament = this.medicaments[id]
    return medicament;
  }
}
