import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-collaboration',
  templateUrl: './liste-collaboration.component.html',
  styleUrls: ['./liste-collaboration.component.css']
})
export class ListeCollaborationComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  entreprise: any[] = [
    {
      nom: 'E-Corp',
      telephone: "771112233",
      adresse: "Dakar",
      email: "ecorp@gmail.com",
      tauxPEC: 0.5
    },
    {
      nom: 'E-Corp',
      telephone: "771112233",
      adresse: "Dakar",
      email: "ecorp@gmail.com",
      tauxPEC: 0.5
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
