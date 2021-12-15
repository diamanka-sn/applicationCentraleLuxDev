import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';

@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrls: ['./liste-fournisseur.component.css']
})
export class ListeFournisseurComponent implements OnInit {

  dtOptions: DataTables.Settings = {};


  subFournisseur!: Subscription;
  fournisseurs!: any[];

  constructor(private serviceForunisseur: ServicefournisseurService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      dom: "<'row mb-4'<'col-sm-12 col-md-8'l><'col-sm-12 col-md-4' f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 pull-right col-md-5' p>>",
      language: { url: 'assets/datatable-French.json' },
    }
    this.getALlFournisseurs();
  }

  getALlFournisseurs() {
    this.subFournisseur = this.serviceForunisseur.subFournisseur.subscribe(
      (allFournisseurs: any[]) => {
        this.fournisseurs = allFournisseurs;
      }
    );
    this.serviceForunisseur.getAllFournisseurs();
  }
}
