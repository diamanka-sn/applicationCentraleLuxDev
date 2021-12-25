import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedetailcategorieService {

  subMedicamentBycategorie = new Subject<any[]>();
  medicamentBycategorie: any[] = [
    {
      id: 1,
      libelle: 'doliprane comprimé 500mg',
      quantite: 20,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 2,
      libelle: 'effaralgan sirop 1000mg',
      quantite: 20,
      prixSession: 30.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 3,
      libelle: 'paracetamol comprimé 50mg',
      quantite: 20,
      prixSession: 50.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 11,
      libelle: 'Abacavir 20mg/ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 4,
      libelle: 'genset comprimé 20ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    //  injectables
    {
      id: 4,
      libelle: 'Bécozyme',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 5,
      libelle: 'Atropine 0,25mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 6,
      libelle: 'Dropéridol 5mg/ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 7,
      libelle: 'Dropéridol 0,1mg/20mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 8,
      libelle: 'Kétoprofène 100mg/2ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 9,
      libelle: 'Dropéridol 5mg/ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 10,
      libelle: 'Hydrocortisone 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 2
    },
    {
      id: 12,
      libelle: 'Abacavir 300mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 13,
      libelle: 'Ibuprofène 100mg/5ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 14,
      libelle: 'Paracétamol 1125mg/5ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 15,
      libelle: 'Méthadone 5mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 15,
      libelle: 'Carbocystéine 5%',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },
    {
      id: 16,
      libelle: 'Glucose 10%',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1
    },

    // solutés de perfusion
    {
      id: 17,
      libelle: 'Glucose 10%',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3
    },
    {
      id: 18,
      libelle: 'Glucose 30%',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3
    },
    {
      id: 19,
      libelle: 'Lactate de Ringer',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3
    },
    {
      id: 20,
      libelle: 'Acide Zolédronique 4mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3
    },
    {
      id: 21,
      libelle: 'Métronidazole 500mg/100ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3
    },
  ];

  constructor() { }

  emitMedicamentBycategorie(id: number) {

    this.subMedicamentBycategorie.next(
      this.medicamentBycategorie.filter((m) => {
        return m.idCategorie == id;
      }));
  }

  getAllMedicamnentByCategorie(id: number) {
    this.emitMedicamentBycategorie(id);
  }
}
