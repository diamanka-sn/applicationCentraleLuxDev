import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrls: ['./liste-fournisseur.component.css']
})
export class ListeFournisseurComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  fournisseur: any[] = [
    {
      nomStructure: 'Pharma Distribution',
      telephone: "770001122",
      adresse: "Ouakam",
      email: "pharmadist@gmail.com",

    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json' },
    }
  }
}
