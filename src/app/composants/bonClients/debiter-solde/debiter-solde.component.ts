import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicebonClientService } from 'src/app/services/ServicebonClientService';

@Component({
  selector: 'app-debiter-solde',
  templateUrl: './debiter-solde.component.html',
  styleUrls: ['./debiter-solde.component.css']
})
export class DebiterSoldeComponent implements OnInit {

  subcribdebiter!: Subscription

  formGroup!: FormGroup
  constructor(private debiterFormGroup: FormBuilder, private serviceBonClient: ServicebonClientService, private routes: Router) { }

  ngOnInit(): void {
    this.subcribdebiter = this.serviceBonClient.bonClientsubject.subscribe();
    this.iniForm()
  }
  iniForm() {

    this.formGroup = this.debiterFormGroup.group({
      montant: ['', [Validators.required, Validators.maxLength(100)]],

    })
  }

  submit() {
    const montant = this.formGroup.value['montant']
    console.log(montant);
    this.serviceBonClient.debiter(montant)

  }

}
