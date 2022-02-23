import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceclientService } from 'src/app/services/serviceclient.service';

@Component({
  selector: 'app-creer-client',
  templateUrl: './creer-client.component.html',
  styleUrls: ['./creer-client.component.css']
})
export class CreerClientComponent implements OnInit {
  formGroup!: FormGroup
  subclient !: Subscription
  constructor(private form: FormBuilder, private routes: Router, private serviceclient: ServiceclientService) {

  }

  ngOnInit(): void {
    this.initForm()
    this.subclient = this.serviceclient.subclient.subscribe()
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
    const profil = "client"
    const motDePasse = "luxdev"
    // const motDePass = this.formGroup.value['motDePass']

    const client = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,
      profil: profil,
      motDePasse: motDePasse
      // motDePass: motDePass
    }
    console.log(nom);
    console.log(prenom);
    console.log(adresse);
    console.log(telephone);
    console.log(email);
    console.log(profil)
    console.log(motDePasse)


    // this.serviceclient.addclient(client)
    this.formGroup.reset() ;
    this.routes.navigate(['espace/clients'])

  }


}
