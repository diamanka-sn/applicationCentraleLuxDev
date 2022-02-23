import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicevendeurService } from 'src/app/services/servicevendeur.service';

@Component({
  selector: 'app-vendeurs',
  templateUrl: './vendeurs.component.html',
  styleUrls: ['./vendeurs.component.css']
})
export class VendeursComponent implements OnInit {

  formGroup!: FormGroup;
  vendeurs: any[] = [];
  dtOptions: DataTables.Settings = {};
  subsutilisateur!: Subscription

  isModify!: boolean ;
  vendeurId!: number ;


  constructor(private routes: Router,
               private servicevendeur: ServicevendeurService, private form: FormBuilder) { }

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
    this.initForm();
    this.getUser();
    this.isModify = false ;
  }

  ajout() {

    $('#exampleModal').modal('show')
  }

  afficherButtonSave() {
    this.isModify = false ;
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
    this.subsutilisateur = this.servicevendeur.subvendeur.subscribe(
      (users: any[]) => {
        this.vendeurs = users;
      })
    this.servicevendeur.getvendeurs() ;
    console.log(this.vendeurs) ;
  }

  submit() {
    const nom = this.formGroup.value['nom']
    const prenom = this.formGroup.value['prenom']
    const adresse = this.formGroup.value['adresse']
    const telephone = this.formGroup.value['telephone']
    const email = this.formGroup.value['email']

    const vendeur = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      telephone: telephone,
      email: email,
      motDePasse: 'luxdev',
      profil: 'vendeur'
    }

    if(!this.isModify){
      this.servicevendeur.addvendeur(vendeur).then(
        () => {
          this.formGroup.reset();
          $('#exampleModal').modal('hide');
          // this.servicevendeur.getvendeurs();
          this.getUser();
        }
      );
      
    }else if(this.isModify){
      this.servicevendeur.modifyVendeur(this.vendeurId, vendeur).then(
        () => {
          this.formGroup.reset();
          this.isModify = false ;
          $('#exampleModal').modal('hide');
          // this.servicevendeur.getvendeurs();
          this.getUser()
        },
        (error) => {
          console.log("#######################################")
          console.log(error)
          console.log("#######################################")
        }
      );      
    }

  }

  modifier(vendeur: any) {
    this.vendeurId = vendeur.id;
    this.isModify = true ;
    this.formGroup.patchValue({
      nom: vendeur.nom,
      prenom: vendeur.prenom,
      adresse: vendeur.adresse,
      telephone: vendeur.telephone,
      email: vendeur.email
    })
    $('#exampleModal').modal('show')
  }

  supprimer(vendeur: any) {
    console.log(vendeur.id)
    this.servicevendeur.deleteVendeur(vendeur.id).then(
      () => {
         this.servicevendeur.getvendeurs();
      },
      (error) => {
        console.log('Erreur de suppression')
      }
    )
    // return confirm("Voulez-vous vraiment ssupprimé ce client")
  }
}
