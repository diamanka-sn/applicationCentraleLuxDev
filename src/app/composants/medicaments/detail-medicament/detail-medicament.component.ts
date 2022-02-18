import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';

@Component({
  selector: 'app-detail-medicament',
  templateUrl: './detail-medicament.component.html',
  styleUrls: ['./detail-medicament.component.css']
})
export class DetailMedicamentComponent implements OnInit, OnDestroy {
  medicament!: any
  submedoc!: Subscription
  // lib: any[] = []
  constructor(private servicem: ServicemedicamentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    console.log('---------id---------- ' + id)
    this.submedoc = this.servicem.medocsubject.subscribe();
    this.servicem.getMedicamentDetail(id).then((medicament) => {
      console.log(medicament)
      this.medicament = medicament
    },
      error => {
        console.log(error)
      });
    console.log(this.medicament)
    // this.lib = this.medicament.libelle.split(' ');
    // console.log(this.lib);
  }


  type1 = 'doughnut';
  dataVentes = {
    labels: ["Ventes", "Autres"],
    datasets: [
      {
        data: [25, 50],
        backgroundColor: ['#ff0266', '#81c784']
      }
    ]
  };
  dataDepenses = {
    labels: ["Depenses", "Autres"],
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

  chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

  mutiLineChartData = {
    labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Jui', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Recettes',
      borderColor: this.chartColors.green,
      backgroundColor: this.chartColors.green,
      data: [10, 30, 46, 2, 8, 50, 0],
      fill: false,
    }, {
      label: 'Pertes',
      borderColor: this.chartColors.red,
      backgroundColor: this.chartColors.red,
      data: [7, 49, 46, 13, 25, 30, 22],
      fill: false,
    }]
  }
  //position = "bottom"
  mutiLineChartDataoptions = {
    responsive: true,
    title: {
      display: true,
      // text: '' + this.position
    }
  }

  ngOnDestroy() {
    this.submedoc.unsubscribe()

  }
}
