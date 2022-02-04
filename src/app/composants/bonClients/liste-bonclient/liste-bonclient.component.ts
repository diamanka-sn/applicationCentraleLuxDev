import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicebonClientService } from 'src/app/services/ServicebonClientService';

@Component({
  selector: 'app-liste-bonclient',
  templateUrl: './liste-bonclient.component.html',
  styleUrls: ['./liste-bonclient.component.css']
})
export class ListeBonclientComponent implements OnInit {
  bonClient!: any[]
  dtOptions: DataTables.Settings = {};
  subsbonClient!: Subscription
  constructor(private routes: Router, private serviceBon: ServicebonClientService) { }

  ngOnInit(): void {
    this.getBonclient()
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

  getBonclient() {
    this.subsbonClient = this.serviceBon.bonClientsubject.subscribe((Bonclients: any[]) => {
      this.bonClient = Bonclients
    })
    this.serviceBon.getbonClient()
  }

}