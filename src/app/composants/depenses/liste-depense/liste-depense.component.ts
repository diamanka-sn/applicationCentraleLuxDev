import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-depense',
  templateUrl: './liste-depense.component.html',
  styleUrls: ['./liste-depense.component.css']
})
export class ListeDepenseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  depense: any[] = [
    {
      description: 'Pharma Distribution',
      montant: "770001122",
      date: "19/11/2021",
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
