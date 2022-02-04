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
        libelle: 'Doliprane Orodoz 500mg 12 comprimés',
        type: "comprime",
        dosage: "500mg",
        liste: "liste1",
        categorie: "medicament oraux",
        quantite: 20,
        prixSession: 5091.66,
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 2,
        libelle: 'Efferalgan 1000mg 8 comprimés',
        quantite: 20,
        prixSession: 3661.66,
        type: "sirop",
        dosage: "1000mg",
        liste: "liste3",
        categorie: "medicament oraux",
        coefficient: 0.3,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 3,
        libelle: 'paracetamol tablet 500mg 20 comprimes',
        quantite: 20,
        prixSession: 200.00,
        type: "comprime",
        dosage: "50mg",
        liste: "liste3",
        categorie: "medicament oraux",
        coefficient: 0.5,
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 4,
        libelle: 'genfort 20mg 8 comprimes',
        quantite: 10,
        prixSession: 2000.100,
        coefficient: 0.3,
        type: "comprime",
        dosage: "20ml",
        liste: "liste1",
        categorie: "medicament oraux",
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 4,
        libelle: 'Doliprane 1000mg poudre 8 sachets',
        quantite: 10,
        prixSession: 4723.34,
        coefficient: 0.3,
        type: "comprime",
        dosage: "20ml",
        liste: "liste1",
        categorie: "medicament oraux",
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },

      {
        id: 4,
        libelle: 'Doliprane 1000mg 8 gélules',
        quantite: 10,
        prixSession: 4723.43,
        coefficient: 0.3,
        type: "comprime",
        dosage: "20ml",
        liste: "liste1",
        categorie: "medicament oraux",
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },

      {
        id: 4,
        libelle: 'Doliprane Tabs 1000mg 8 comprimés',
        quantite: 10,
        prixSession: 4268.34,
        coefficient: 0.3,
        type: "comprime",
        dosage: "20ml",
        liste: "liste1",
        categorie: "medicament oraux",
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 4,
        libelle: 'Efferalgan 500 mg vanille fraise granulés 16 sachets',
        quantite: 10,
        prixSession: 7063.34,
        coefficient: 0.3,
        type: "comprime",
        dosage: "20ml",
        liste: "liste1",
        categorie: "medicament oraux",
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },
      {
        id: 4,
        libelle: 'Doliprane 1000mg 8 comprimés effervescents',
        quantite: 10,
        prixSession: 4723.34,
        coefficient: 0.3,
        type: "comprime",
        dosage: "20ml",
        liste: "liste1",
        categorie: "medicament oraux",
        tva: '0.2%',
        venteLibre: 'OUI',
        datePeremption: "21/02/2022"
      },




    ]


    // this.http.get<any[]>("http://localhost:3000/medicaments")
    //   .subscribe(medicaments => {
    //     this.medicaments = medicaments
    //     console.log(medicaments)
    //     this.emitMedoc()
    //   },
    //     (error) => {
    //       return error
    //     }
    //   )
    this.emitMedoc()

  }

  ajoutMedicament(medicament: any) {

    this.medicaments.push(medicament)
    this.emitMedoc()

  }

  getMedicamentDetail(id: string) {
    const medicament = this.medicaments.find((m) => {
      return m.libelle === id.split('-').join(' ')
    });
    return medicament;
  }

  ajoutLot(lot: any) {
    const medicament = this.medicaments.find((m) => {
      return m.libelle === lot.libelle
    });
    medicament.quantite = medicament.quantite + lot.quantite

    this.emitMedoc()
  }
}
