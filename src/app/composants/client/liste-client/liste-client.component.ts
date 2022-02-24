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
  clients: any[] = [] ;
  dtOptions: DataTables.Settings = {};
  subsclient!: Subscription
  isModify!: boolean ;
  clientId!: number ;
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
    this.isModify = false ;
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

  afficherButtonSave() {
    this.isModify = false ;
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
    if(!this.isModify){
      this.serviceclient.addclient(client).then(
        () => {
          this.formGroup.reset();
          $('#exampleModal').modal('hide');
          this.getclient();
        }
      )
      
    }else if(this.isModify){
      
      this.serviceclient.modifyClient(this.clientId, client).then(
        () => {
          this.formGroup.reset() ;
          this.isModify = false ;
          $('#exampleModal').modal('hide');
          this.getclient();
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  modifier(client: any) {
    this.clientId = client.id;
    this.isModify = true ;
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
    console.log(client.id)
    this.serviceclient.deleteClient(client.id).then(
      () => {
        // this.formGroup.reset()
        //  $('#exampleModal').modal('hide')
         this.getclient();
      },
      (error) => {
        console.log('Erreur de suppression')
      }
    )
    // return confirm("Voulez-vous vraiment ssupprimé ce client")
  }

  afficherDetail(c: any) {
    console.log(c.id)
    this.routes.navigate(['/espace/clients/' + c.id]);
  }

  getclient() {
    this.subsclient = this.serviceclient.subclient.subscribe(
      (allClient: any[]) => {
      this.clients = allClient
    });
    this.serviceclient.getclients();
    console.log(this.clients)
  }

}
