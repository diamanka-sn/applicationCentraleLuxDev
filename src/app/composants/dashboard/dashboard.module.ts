import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartVentesComponent } from './chart-ventes/chart-ventes.component'
import { ChartModule } from 'angular2-chartjs';
import { ChartStockComponent } from './chart-stock/chart-stock.component';
import { TableauDepensesComponent } from './tableau-depenses/tableau-depenses.component';
// import { DepenseChartComponent } from './depense-chart/depense-chart.component';

// import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    DashboardComponent,
    ChartVentesComponent,
    ChartStockComponent,
    TableauDepensesComponent,
    // DepenseChartComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
  ]
})
export class DashboardModule { }
