import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceutilisateurService } from 'src/app/services/serviceutilisateur.service';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.css']
})
export class VendeursComponent implements OnInit {

  formGroup!: FormGroup
  utilisateurs!: any[]
  dtOptions: DataTables.Settings = {};
  subsutilisateur!: Subscription
  constructor(private routes: Router, private serviceuser: ServiceutilisateurService, private form: FormBuilder) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      dom: "<'row mb-4'<'col-sm-12 col-md-8'l><'col-sm-12 col-md-4' f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 pull-right col-md-5' p>>",
      language: { url: 'assets/datatable-French.json' },
      // data: this.personne,
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }
    this.initForm()
    this.getUser()
  }

  ajout() {

    $('#exampleModal').modal('show')
  }

  initForm() {
    this.formGroup = this.form.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  getUser() {
    this.subsutilisateur = this.serviceuser.subutilisateur.subscribe(
      (users: any[]) => {
        this.utilisateurs = users
      })
    this.serviceuser.getUtilisateurs()
  }

  submit() {
    const nom = this.formGroup.value['nom']
    const prenom = this.formGroup.value['prenom']
    const adresse = this.formGroup.value['adresse']
    const telephone = this.formGroup.value['telephone']
    const email = this.formGroup.value['email']


    const user = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,

    }
    this.serviceuser.addUser(user);
    ($('#exampleModal') as any).modal('hide')
    this.formGroup.reset()
  }

  modifier(u: any) {
    this.formGroup.patchValue({
      nom: u.nom,
      prenom: u.prenom,
      adresse: u.adresse,
      telephone: u.telephone,
      email: u.email
    })
    $('#exampleModal').modal('show')
  }

}
