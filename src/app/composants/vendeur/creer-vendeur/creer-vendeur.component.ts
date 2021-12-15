import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicevendeurService } from 'src/app/services/servicevendeur.service';

@Component({
  selector: 'app-creer-vendeur',
  templateUrl: './creer-vendeur.component.html',
  styleUrls: ['./creer-vendeur.component.css']
})

export class CreervendeurComponent implements OnInit {
  formGroup!: FormGroup
  subvendeur !: Subscription
  constructor(private form: FormBuilder, private routes: Router, private servicevendeur: ServicevendeurService) {

  }

  ngOnInit(): void {
    this.initForm()
    this.subvendeur = this.servicevendeur.subvendeur.subscribe()
  }

  initForm() {
    this.formGroup = this.form.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // motDePass: ['', [Validators.required]],
    })
  }

  submit() {
    const nom = this.formGroup.value['nom']
    const prenom = this.formGroup.value['prenom']
    const adresse = this.formGroup.value['adresse']
    const telephone = this.formGroup.value['telephone']
    const email = this.formGroup.value['email']
    // const motDePass = this.formGroup.value['motDePass']

    const vendeur = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,
      // motDePass: motDePass

    }
    this.servicevendeur.addvendeur(vendeur)

  }
}
