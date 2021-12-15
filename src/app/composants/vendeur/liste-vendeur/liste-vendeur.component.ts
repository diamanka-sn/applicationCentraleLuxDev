import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicevendeurService } from 'src/app/services/servicevendeur.service';

@Component({
  selector: 'app-liste-vendeur',
  templateUrl: './liste-vendeur.component.html',
  styleUrls: ['./liste-vendeur.component.css']
})
export class ListeVendeurComponent implements OnInit {


  vendeurs!: any[]
  dtOptions: DataTables.Settings = {};
  subsvendeur!: Subscription
  constructor(private routes: Router, private servicevendeur: ServicevendeurService) { }

  ngOnInit(): void {
    this.getvendeur()
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
  }

  getvendeur() {
    this.subsvendeur = this.servicevendeur.subvendeur.subscribe((vendeurs: any[]) => {
      this.vendeurs = vendeurs
    })
    this.servicevendeur.getvendeurs()
  }

}
