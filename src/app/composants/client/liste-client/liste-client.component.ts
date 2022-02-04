import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceclientService } from 'src/app/services/serviceclient.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  formGroup!: FormGroup;
  clients!: any[]
  dtOptions: DataTables.Settings = {};
  subsclient!: Subscription
  constructor(private routes: Router, private serviceclient: ServiceclientService, private form: FormBuilder) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json' },
      // data: this.personne,
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }
    this.initForm()
    this.getclient()
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

    const client = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,
      // motDePass: motDePass

    }
    this.serviceclient.addclient(client)
    this.formGroup.reset()
    $('#exampleModal').modal('hide')

  }

  modifier(client: any) {
    this.formGroup.patchValue({
      nom: client.nom,
      prenom: client.prenom,
      email: client.email,
      telephone: client.telephone,
      adresse: client.adresse
    });
    $('#exampleModal').modal('show')
  }

  supprimer(client: any) {
    return confirm("Voulez-vous vraiment ssupprimé ce client")
  }

  getclient() {
    this.subsclient = this.serviceclient.subclient.subscribe((clients: any[]) => {
      this.clients = clients
    })
    this.serviceclient.getclients()
  }

}
