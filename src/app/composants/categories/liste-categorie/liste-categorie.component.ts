import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  categories!: any[];
  subscribCategorie!: Subscription
  constructor(private routes: Router, private servicecategorie: ServicecategorieService) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json' },
      // data: this.personne,
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }

    this.getCategorie()

  }

  getCategorie() {
    this.subscribCategorie = this.servicecategorie.categoriesubject.subscribe((categorie: any[]) => {
      this.categories = categorie
    })
    this.servicecategorie.getCategorie()
  }

  ngOnDestroy() {
    this.subscribCategorie.unsubscribe()
  }
}
