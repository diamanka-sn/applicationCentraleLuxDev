import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';

@Component({
  selector: 'app-detail-medicament',
  templateUrl: './detail-medicament.component.html',
  styleUrls: ['./detail-medicament.component.css']
})
export class DetailMedicamentComponent implements OnInit {
  medicament!: any
  submedoc!: Subscription
  lib: any[]=[]
  constructor(private servicem: ServicemedicamentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    this.submedoc = this.servicem.medocsubject.subscribe();
    this.medicament = this.servicem.getMedicamentDetail(+id);
    console.log(this.medicament)
    this.lib = this.medicament.libelle.split(' ');
    console.log(this.lib);
  }

  
  type1 = 'doughnut';
  data1 = {
    labels: ["Medicament", "Autres medicaments"],
    datasets: [
      {
        data: [25, 50],
        backgroundColor: ['#ff0266', '#81c784']
      }
    ]
  };

  
  options4 = {
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false,

  }

}
