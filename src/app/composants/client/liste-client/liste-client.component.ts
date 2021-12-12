import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceclientService } from 'src/app/services/serviceclient.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  clients!: any[]
  dtOptions: DataTables.Settings = {};
  subsclient!: Subscription
  constructor(private routes: Router, private serviceclient: ServiceclientService) { }

  ngOnInit(): void {
    this.getclient()
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

  getclient() {
    this.subsclient = this.serviceclient.subclient.subscribe((clients: any[]) => {
      this.clients = clients
    })
    this.serviceclient.getclients()
  }

}
