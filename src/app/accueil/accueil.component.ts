import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicemedicamentService } from '../services/servicemedicament.service';

@Component({
  selector: 'app-accueil-app',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponentApp implements OnInit {

  medicaments!: any[]
  submed!: Subscription
  constructor(private http: HttpClient, private servicemed: ServicemedicamentService) { }

  ngOnInit(): void {

    this.getMedicament()
  }

  getMedicament() {

    this.servicemed.medocsubject.subscribe((medicaments: any[]) => {
      this.medicaments = medicaments
      console.log(medicaments)
    })
    this.servicemed.getMedicament()
  }

}
