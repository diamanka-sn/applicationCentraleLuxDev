import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicedepenseService } from 'src/app/services/servicedepense.service';

@Component({
  selector: 'app-liste-depense',
  templateUrl: './liste-depense.component.html',
  styleUrls: ['./liste-depense.component.css']
})
export class ListeDepenseComponent implements OnInit, OnDestroy {

  depenses: any[] = [];
  subDepenses!: Subscription;

  dtOptions: DataTables.Settings = {};
  depense: any[] = [
    {
      description: 'Pharma Distribution',
      montant: "770001122",
      date: "19/11/2021",
    }
  ]

  constructor(private serviceDepense: ServicedepenseService,
    private router: Router) { }

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
    this.getAllDepense();
  }

  getAllDepense() {
    this.subDepenses = this.serviceDepense.subDepense.subscribe(
      (allDepenses: any[]) => {
        this.depenses = allDepenses;
      }
    );
    this.serviceDepense.getAllDepenses();
    console.log(this.depenses);
  }

  ngOnDestroy() {
    this.subDepenses.unsubscribe();
  }
}
