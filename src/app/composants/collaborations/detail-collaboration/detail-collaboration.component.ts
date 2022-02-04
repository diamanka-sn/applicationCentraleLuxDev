import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceCollaborationService } from 'src/app/services/service-collaboration.service';

@Component({
  selector: 'app-detail-collaboration',
  templateUrl: './detail-collaboration.component.html',
  styleUrls: ['./detail-collaboration.component.css']
})
export class DetailCollaborationComponent implements OnInit {
  entreprise!: any;
  subentreprise!: Subscription

  constructor(private entreprises: ServiceCollaborationService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    this.subentreprise = this.entreprises.subCollaboration.subscribe();
    console.log(id)
    // this.entreprise = this.entreprises.getCollaborationDetail(+id);
    console.log(this.entreprise)
  }

  type1 = 'pie';
  datacollaboration = {
    labels: ["paiement", "retard"],
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
    labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Paiement mensuelle',
      borderColor: this.chartColors.green,
      backgroundColor: this.chartColors.green,
      data: [10, 30, 46, 2, 8, 50, 29],
      fill: false,
    }
      // , {
      //   label: 'Pertes',
      //   borderColor: this.chartColors.red,
      //   backgroundColor: this.chartColors.red,
      //   data: [7, 49, 46, 13, 25, 30, 22],
      //   fill: false,
      // }
    ]
  }
  //position = "bottom"
  mutiLineChartDataoptions = {
    responsive: true,
    title: {
      display: true,
      // text: '' + this.position
    }

  }
}