import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart-ventes',
  templateUrl: './chart-ventes.component.html',
  styleUrls: ['./chart-ventes.component.css']
})
export class ChartVentesComponent implements OnInit {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
        label: 'Ventes',
        backgroundColor: 'blue',
      }, {
        data: [28, 48, 40, 19, 86, 27, 90, 59, 80, 81, 56, 55, 40],
        label: 'Dépenses',
        backgroundColor: 'red',
      }],
    };

    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
          fontColor: 'dark',
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              color: 'dark',
            },
            ticks: {
              fontColor: 'dark',
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: 'dark',
            },
            ticks: {
              fontColor: 'dark',
            },
          },
        ],
      },
    };
  }
  ngOnInit(): void {
  }

}
