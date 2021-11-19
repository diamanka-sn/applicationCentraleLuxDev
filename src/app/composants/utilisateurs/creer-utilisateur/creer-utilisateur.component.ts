import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceutilisateurService } from 'src/app/services/serviceutilisateur.service';

@Component({
  selector: 'app-creer-utilisateur',
  templateUrl: './creer-utilisateur.component.html',
  styleUrls: ['./creer-utilisateur.component.css']
})
export class CreerUtilisateurComponent implements OnInit {

  formGroup!: FormGroup
  subuser !: Subscription
  constructor(private form: FormBuilder, private routes: Router, private serviceuser: ServiceutilisateurService) {

  }

  ngOnInit(): void {
    this.initForm()
    this.subuser = this.serviceuser.subutilisateur.subscribe()
  }

  initForm() {
    this.formGroup = this.form.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profil: ['', [Validators.required]],
    })
  }

  submit() {
    const nom = this.formGroup.value['nom']
    const prenom = this.formGroup.value['prenom']
    const adresse = this.formGroup.value['adresse']
    const telephone = this.formGroup.value['telephone']
    const email = this.formGroup.value['email']
    const profil = this.formGroup.value['profil']

    const user = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,
      profil: profil

    }
    this.serviceuser.addUser(user)

  }

}
