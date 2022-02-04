import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicecategorieService {

  categorie!: any[];
  categoriesubject = new Subject<any[]>()

  constructor(private http: HttpClient) { }

  emitCategorie() {
    this.categoriesubject.next(this.categorie.slice())
  }

  getCategorie() {
    this.categorie = [
      {
        libelle: 'Médicaments Oraux',

      },
      {
        libelle: 'Médicaments Injectables',

      },
      {
        libelle: 'Solutés de Perfusion',

      },
      {
        libelle: 'Médicaments à Usage Externe',

      },
      {
        libelle: 'Médicaments OPH à usage externe',

      },
      {
        libelle: 'Désinfectants',

      },
    ]
    this.emitCategorie();
  }

  ajoutCategorie(categorie: any) {

    this.categorie.push(categorie)
    this.emitCategorie()

  }

}
