import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicebonClientService } from 'src/app/services/ServicebonClientService';
import { ServiceutilisateurService } from 'src/app/services/serviceutilisateur.service';

@Component({
  selector: 'app-creer-bonclient',
  templateUrl: './creer-bonclient.component.html',
  styleUrls: ['./creer-bonclient.component.css']
})
export class CreerBonclientComponent implements OnInit {


  formGroup!: FormGroup
  subbonClient !: Subscription
  constructor(private form: FormBuilder, private routes: Router, private servicebonClient: ServicebonClientService) {

  }

  ngOnInit(): void {
    this.initForm()
    this.subbonClient = this.servicebonClient.bonClientsubject.subscribe()
  }

  initForm() {
    this.formGroup = this.form.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      solde: ['', [Validators.required]],
    })
  }

  submit() {
    const nom = this.formGroup.value['nom']
    const prenom = this.formGroup.value['prenom']
    const adresse = this.formGroup.value['adresse']
    const telephone = this.formGroup.value['telephone']
    const email = this.formGroup.value['email']
    const solde = this.formGroup.value['solde']

    const bonClient = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,
      solde: solde

    }
    this.servicebonClient.ajoutbonClient(bonClient)

  }

}
