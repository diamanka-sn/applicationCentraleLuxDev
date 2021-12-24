import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedetailrayonService {

  subMedicamentByRayon = new Subject<any[]>() ;
  medicamentByRayon: any[] = [
    {
      id: 1,
      libelle: 'Actron 30 comprimés effervescents',
      quantite: 20,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1,
      idRayon: 3,
      numeroEtage: 1    
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 1  
    },
    {
      id: 3,
      libelle: 'advil 30 comprimés 200mg',
      quantite: 20,
      prixSession: 50.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1,
      idRayon: 3,
      numeroEtage: 1  
    },
    {
      id: 11,
      libelle: 'advil 14 comprimés 400mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1,
      idRayon: 3,
      numeroEtage: 1  
    },
    {
      id: 23,
      libelle: 'aspirine protect 30 comprimés 100mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 1
    },
    {
      id: 4,
      libelle: 'advil sirop comprimé 20ml',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 2 
    },
    {
      id: 26,
      libelle: 'doliprane 8 comprimés 100mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 2 
    },
    {
      id: 27,
      libelle: 'doliprane 8 comprimés-effervescents 100mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 3
    },
    {
      id: 28,
      libelle: 'doliprane 10 suppositoires-secables  100mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 2  
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
      idCategorie: 2,
      idRayon: 2,
      numeroEtage: 2
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
      idCategorie: 2,
      idRayon: 2,
      numeroEtage: 2
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
      idCategorie: 2,
      idRayon: 2,
      numeroEtage: 5
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
      idCategorie: 2,
      numeroEtage: 5
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
      idCategorie: 2,
      numeroEtage: 6
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
      idCategorie: 2,
      idRayon: 2,
      numeroEtage: 4
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
      idCategorie: 2,
      idRayon: 2,
      numeroEtage: 6  
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 1  
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 6  
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 6  
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 7
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 3
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
      idCategorie: 1,
      idRayon: 2,
      numeroEtage: 5
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
      idCategorie: 3,
      idRayon: 2,
      numeroEtage: 5
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
      idCategorie: 3,
      numeroEtage: 5
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
      idCategorie: 3,
      numeroEtage: 7
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
      idCategorie: 3,
      numeroEtage: 1  
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
      idCategorie: 3,
      numeroEtage: 6
    },
    
    {
      id: 24,
      libelle: 'dafalgan 8 gélules 100mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 5
    },
    {
      id: 25,
      libelle: 'dafalgan 16 comprimés 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 3
    },
    {
      id: 29,
      libelle: 'flexa 60 comprimés 625mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 3,
      numeroEtage: 3
    },
    {
      id: 30,
      libelle: 'nurofenFlash 12 comprimés 400mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 3,
      idRayon: 4,
      numeroEtage: 4  
    },
    {
      id: 31,
      libelle: 'amikacine 10 ampoules 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 1,
      idRayon: 4,
      numeroEtage: 2  
    },
    {
      id: 31,
      libelle: 'amikacine 10 ampoules 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 4,
      idRayon: 4,
      numeroEtage: 4
    },
    {
      id: 32,
      libelle: 'Amoxicilline Sandoz 20 comprimés péliculés 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 4,
      idRayon: 4,
      numeroEtage: 3
    },
    {
      id: 32,
      libelle: 'Amoxicilline Sandoz 20 comprimés péliculés 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idCategorie: 4,
      idRayon: 4,
      numeroEtage: 2
    },
    {
      id: 33,
      libelle: 'Amoxicilline 10x10 gélules 500mg',
      quantite: 10,
      prixSession: 40.00,
      coefficient: 0.3,
      tva: '0.2%',
      venteLibre: 'OUI',
      datePeremption: "21/02/2022",
      idRayon: 4,
      numeroEtage: 2
    },
  ];

  constructor() { }

  emitMedicamentByRayon(id: number) {
    this.subMedicamentByRayon.next(this.medicamentByRayon.filter(
      (m) => {
        return m.idRayon == id ;
      }
    ));
  }
  getAllMedicamentByRayon(id: number) {
    this.emitMedicamentByRayon(id) ;
  }

  operationMedicamentAuRayon(m: any, quantite: number, action:string) {
    const indiceMedicament = this.medicamentByRayon.findIndex(
      (medoc) => medoc.id == m.id
    );
    if (action == "ajouter"){
      this.medicamentByRayon[indiceMedicament].quantite += quantite  ;
    }else if (action == "retirer") {
      this.medicamentByRayon[indiceMedicament].quantite -= quantite  ;
    }else {
      console.log("removed")
    }
    
    console.log('xxxxxxxxxx     ' + indiceMedicament) ;
  }
  removeMedicamentAuRayon(m:any) {

    this.medicamentByRayon = this.medicamentByRayon.filter(
      (medoc) => medoc.id != m.id
    );
    this.subMedicamentByRayon.next(this.medicamentByRayon.slice()) ;
    console.log('médoc retire$$$$$     ' ) ;
  }
}
