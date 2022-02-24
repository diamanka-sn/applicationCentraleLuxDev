import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicecategorieService } from '../services/servicecategorie.service';
import { ServicemedicamentService } from '../services/servicemedicament.service';

@Component({
  selector: 'app-accueil-app',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponentApp implements OnInit {

  medicaments!: any[]
  categories!: any[]
  submed!: Subscription
  subCat!: Subscription
  constructor(private http: HttpClient, private servicemed: ServicemedicamentService, private servicecat: ServicecategorieService) { }

  ngOnInit(): void {

    this.getMedicament()
    this.getCategorie()
  }

  getMedicament() {

    this.servicemed.medocsubject.subscribe((medicaments: any[]) => {
      this.medicaments = medicaments
      console.log(medicaments)
    })
    this.servicemed.getMedicament()
  }

  getCategorie() {
    this.servicecat.categoriesubject.subscribe((categories: any[]) => {
      this.categories = categories
      console.log(categories)
    })
    this.servicecat.getCategorie()
  }
  ngDestroy(): void {
    this.subCat.unsubscribe()
    this.submed.unsubscribe()
  }

}
