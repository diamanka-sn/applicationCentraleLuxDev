import { Component, OnInit } from '@angular/core';


import { Chart } from 'chart.js'
import { ServiceCollaborationService } from 'src/app/services/service-collaboration.service';
import { ServiceclientService } from 'src/app/services/serviceclient.service';
import { ServicecommandeService } from 'src/app/services/servicecommande.service';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ServiceventeService } from 'src/app/services/servicevente.service';
import { CreerCollaborationComponent } from '../collaborations/creer-collaboration/creer-collaboration.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nbFournisseur: any
  nbCollaboration: any
  nbClient: any
  nbCommande: any

  dates!: Date
  venteAnnuelle: number | undefined
  constructor(private fournisseur: ServicefournisseurService,
    private collaborateur: ServiceCollaborationService,
    private client: ServiceclientService,
    private commande: ServicecommandeService,
    private vente: ServiceventeService
  ) { }

  ngOnInit() {
    this.fournisseur.getNombreFournisseur().subscribe(res => {
      this.nbFournisseur = res
    })

    this.collaborateur.getNombreCollaborateur().subscribe(res => {
      this.nbCollaboration = res
    })

    this.client.getNombreClient().subscribe(res => {
      this.nbClient = res
    })

    this.commande.getNombreCommande().subscribe(res => {
      this.nbCommande = res
    })

    this.vente.getTotalVente().subscribe(res => {
      const r = AnneeCours(res[0].annee)
      console.log(r)
      this.venteAnnuelle = res[0].total
      console.log(this.venteAnnuelle)
    })
  }

  type1 = 'doughnut';
  data1 = {
    labels: ["Medicament", "Salaire", "Depenses"],
    datasets: [
      {
        data: [25, 25, 50],
        backgroundColor: ['#ff0266', '#81c784', '#29b6f6']
      }
    ]
  };

  options1 = {
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }]
    }
  }


  options2 = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }]
    }
  }

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
      label: 'Dépenses',
      borderColor: this.chartColors.red,
      backgroundColor: this.chartColors.red,
      data: [10, 30, 46, 2, 8, 50, 0],
      fill: false,
    }, {
      label: 'Ventes',
      borderColor: this.chartColors.blue,
      backgroundColor: this.chartColors.blue,
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
}
function AnneeCours(date: String){
  var dates = new Date();
  var d = dates.getUTCFullYear().toString();
  if(d == date){
    return 0
  } else {
    return 1
  }
}

