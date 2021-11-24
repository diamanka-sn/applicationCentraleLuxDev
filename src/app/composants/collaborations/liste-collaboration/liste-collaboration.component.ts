import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceCollaborationService } from 'src/app/services/service-collaboration.service';

@Component({
  selector: 'app-liste-collaboration',
  templateUrl: './liste-collaboration.component.html',
  styleUrls: ['./liste-collaboration.component.css']
})
export class ListeCollaborationComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  subEntreprise!: Subscription ;
  entreprises!: any[] ;


  constructor(private serviceCollaboration: ServiceCollaborationService,
              private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json' },
    }
    this.getAllCollaboration() ;
  }

  getAllCollaboration() {
    this.subEntreprise = this.serviceCollaboration.subCollaboration.subscribe(
      (allEntreprises: any) => {
        this.entreprises = allEntreprises ;
      }
    )
    this.serviceCollaboration.getAllColaboration() ;
  }
}
