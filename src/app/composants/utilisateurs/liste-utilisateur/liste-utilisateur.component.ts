import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceutilisateurService } from 'src/app/services/serviceutilisateur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {
  utilisateurs!: any[]
  dtOptions: DataTables.Settings = {};
  subsutilisateur!: Subscription
  constructor(private routes: Router, private serviceuser: ServiceutilisateurService) { }

  ngOnInit(): void {
    this.getUser()
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

  getUser() {
    this.subsutilisateur = this.serviceuser.subutilisateur.subscribe((users: any[]) => {
      this.utilisateurs = users
    })
    this.serviceuser.getUtilisateurs()
  }

}
