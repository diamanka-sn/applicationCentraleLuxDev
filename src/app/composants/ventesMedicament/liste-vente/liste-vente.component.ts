import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceventeService } from 'src/app/services/servicevente.service';

@Component({
  selector: 'app-liste-vente',
  templateUrl: './liste-vente.component.html',
  styleUrls: ['./liste-vente.component.css']
})
export class ListeVenteComponent implements OnInit {

  ventes!: any[] ;
  subVente!: Subscription ;

  dtOptions: DataTables.Settings = {}

  constructor(private router: Router, private servicevente: ServiceventeService) { }

  ngOnInit(): void {
    this.getAllVentes() ;
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
  
  getAllVentes() {
    this.subVente = this.servicevente.subvente.subscribe(
      (allVentes: any[]) => {
        this.ventes = allVentes ;
      }
    );
    this.servicevente.getVentes() ;
  }
}
