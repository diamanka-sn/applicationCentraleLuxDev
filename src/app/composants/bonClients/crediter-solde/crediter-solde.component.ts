import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicebonClientService } from 'src/app/services/ServicebonClientService';

@Component({
  selector: 'app-crediter-solde',
  templateUrl: './crediter-solde.component.html',
  styleUrls: ['./crediter-solde.component.css']
})
export class CrediterSoldeComponent implements OnInit {

  subcribcrediter!: Subscription

  formGroup!: FormGroup
  constructor(private crediterFormGroup: FormBuilder, private serviceBonClient: ServicebonClientService, private routes: Router) { }

  ngOnInit(): void {
    this.subcribcrediter = this.serviceBonClient.subcribcrediter.subscribe();
    this.iniForm()
  }
  iniForm() {

    this.formGroup = this.crediterFormGroup.group({
      montant: ['', [Validators.required, Validators.maxLength(100)]],

    })
  }

  submit() {
    const montant = this.formGroup.value['montant']
    console.log(montant);
    this.serviceBonClient.crediter(montant)

  }

}
