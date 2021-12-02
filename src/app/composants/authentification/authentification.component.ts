import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceauthentificationService } from 'src/app/services/serviceauthentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  isAuth!: boolean
  formGroup!: FormGroup

  constructor(private form: FormBuilder, private routes: Router, private serviceauth: ServiceauthentificationService) {

  }

  ngOnInit(): void {
    this.isAuth = this.serviceauth.isAuth
    this.initForm()
  }

  initForm() {
    this.formGroup = this.form.group({
      login: ['', [Validators.required]],
      motDePasse: ['', [Validators.required]]
    })

  }

  submit() {
    const login = this.formGroup.value['login']
    const mp = this.formGroup.value['motDePasse']
    this.serviceauth.connexion(login, mp)
  }

}
