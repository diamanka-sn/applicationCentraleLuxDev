import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';


@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  medicaments!: any[];
  subscribmedoc!: Subscription
  constructor(private routes: Router, private servicemedoc: ServicemedicamentService) {

  }

  ngOnInit(): void {
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
    this.getMedcament()
  }

  getMedcament() {
    this.subscribmedoc = this.servicemedoc.medocsubject.subscribe((medocs: any[]) => {
      this.medicaments = medocs
    })
    this.servicemedoc.getMedicament()
  }

  ngOnDestroy() {
    this.subscribmedoc.unsubscribe()
  }

  afficher() {
    $('#exampleModal').show()
  }
 
}
