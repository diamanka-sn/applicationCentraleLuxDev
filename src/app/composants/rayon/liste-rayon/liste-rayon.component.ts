import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicerayonService } from 'src/app/services/servicerayon.service';

@Component({
  selector: 'app-liste-rayon',
  templateUrl: './liste-rayon.component.html',
  styleUrls: ['./liste-rayon.component.css']
})
export class ListeRayonComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  rayons!: any[];
  subscribrayon!: Subscription
  constructor(private routes: Router, private servicerayon: ServicerayonService) {

  }

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
      // data: this.personne,
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }

    this.getrayon()

  }

  getrayon() {
    this.subscribrayon = this.servicerayon.rayonsubject.subscribe((rayon: any[]) => {
      this.rayons = rayon
    })
    this.servicerayon.getrayon()
  }

  ngOnDestroy() {
    this.subscribrayon.unsubscribe()
  }

}
