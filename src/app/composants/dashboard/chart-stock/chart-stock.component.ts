import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-stock',
  templateUrl: './chart-stock.component.html',
  styleUrls: ['./chart-stock.component.css']
})
export class ChartStockComponent implements OnInit {
  data: any;
  options: any;
  constructor() { 
    
    this.data = {
      labels: ['Deparasitant', 'Antidouleur', 'Pomades'],
      datasets: [{
        data: [300, 500, 100],
        backgroundColor: ['green', 'red', 'blue'],
      }],
    };

    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      legend: {
        labels: {
          fontColor: 'dark',
        },
      },
    };
 
  }

  ngOnInit(): void {
  }

}
