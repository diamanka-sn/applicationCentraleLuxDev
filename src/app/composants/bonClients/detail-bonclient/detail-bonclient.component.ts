import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicebonClientService } from 'src/app/services/ServicebonClientService';
import { BonClient } from 'src/models/BonClient.models';

@Component({
  selector: 'app-detail-bonclient',
  templateUrl: './detail-bonclient.component.html',
  styleUrls: ['./detail-bonclient.component.css']
})
export class DetailBonclientComponent implements OnInit {

  bonClient!: any;
  sub_BonClient!: Subscription

  constructor(
    private route: ActivatedRoute,
    private bonClientService: ServicebonClientService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.sub_BonClient = this.bonClientService.bonClientsubject.subscribe();


    this.bonClient = new BonClient(0, 0);
    const id = this.route.snapshot.params['id'];
    console.log('IDDDDDDDDDDDDDDDDDDDDDDDDD=' + id)
    // this.bonClientService.getSingleBonClient(id);
    this.bonClientService.getSingleBonClient(+id).subscribe(
      (res: any) => {
        this.bonClient = res;
      },
    );
  }


  type1 = 'pie';
  datacollaboration = {
    labels: ["debiter", "crediter"],
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

  // chartColors = {
  //   red: 'rgb(255, 99, 132)',
  //   orange: 'rgb(255, 159, 64)',
  //   yellow: 'rgb(255, 205, 86)',
  //   green: 'rgb(75, 192, 192)',
  //   blue: 'rgb(54, 162, 235)',
  //   purple: 'rgb(153, 102, 255)',
  //   grey: 'rgb(201, 203, 207)'
  // };

  // mutiLineChartData = {
  //   labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Sept', 'Oct', 'Nov', 'Dec'],
  //   datasets: [{
  //     label: 'Paiement mensuelle',
  //     borderColor: this.chartColors.green,
  //     backgroundColor: this.chartColors.red,
  //     data: [10, 30, 46, 2, 8, 50, 29],
  //     fill: false,
  //   }
  // , {
  //   label: 'Pertes',
  //   borderColor: this.chartColors.red,
  //   backgroundColor: this.chartColors.red,
  //   data: [7, 49, 46, 13, 25, 30, 22],
  //   fill: false,
  // }
  // ]
  // }
  //position = "bottom"
  // mutiLineChartDataoptions = {
  //   responsive: true,
  //   title: {
  //     display: true,
  //     // text: '' + this.position
  //   }


  // }
}
