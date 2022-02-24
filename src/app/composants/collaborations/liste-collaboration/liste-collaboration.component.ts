import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceCollaborationService } from 'src/app/services/service-collaboration.service';

@Component({
  selector: 'app-liste-collaboration',
  templateUrl: './liste-collaboration.component.html',
  styleUrls: ['./liste-collaboration.component.css']
})
export class ListeCollaborationComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  subEntreprise!: Subscription;
  formGroup!: FormGroup
  entreprises!: any[];
  isModify!: boolean ;
  collaborationId!: number;


  constructor(private serviceCollaboration: ServiceCollaborationService,
    private router: Router, private entrepriseFormGroup: FormBuilder) { }

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
    }
    this.initForm()
    this.getAllCollaboration();
    this.isModify = false ;
  }

  initForm() {
    this.formGroup = this.entrepriseFormGroup.group({
      nom: ['', [Validators.required, Validators.maxLength(100)]],
      adresse: ['', [Validators.required, Validators.maxLength(100)]],
      telephone: ['', [Validators.required, Validators.min(9)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      tauxPEC: ['', [Validators.required]]
    })
  }

  afficherButtonSave() {
    this.isModify = false ;
  }
  submit() {
    const nom = this.formGroup.value['nom']
    const adresse = this.formGroup.value['adresse']
    const telephone = this.formGroup.value['telephone']
    const email = this.formGroup.value['email']
    const tauxPEC = this.formGroup.value['tauxPEC']

    const entreprise = {
      nom: nom,
      email: email,
      telephone: telephone,
      adresse: adresse,
      tauxPEC: tauxPEC
    }
    if(!this.isModify) {
      this.serviceCollaboration.addCollaboration(entreprise).then(
        () => {
          this.formGroup.reset();
          $('#exampleModal').modal('hide');
          this.getAllCollaboration();
        },
        (error) => {
          console.log(error)
        }
      )
    }else{
      this.serviceCollaboration.modifyCollaboration(this.collaborationId, entreprise).then(
        () => {
          this.formGroup.reset() ;
          this.isModify = false ;
          $('#exampleModal').modal('hide');
          this.getAllCollaboration();
        },
        (error) => {
          console.log(error)
        }
      )
    }
    
    
    

  }

  modifier(e: any) {
    this.collaborationId = e.id;
    this.isModify = true ;
    this.formGroup.patchValue({
      nom: e.nom,
      adresse: e.adresse,
      telephone: e.telephone,
      email: e.email,
      tauxPEC: e.tauxPEC
    });
    $('#exampleModal').modal('show')
  }

  supprimer(e: any) {
    this.serviceCollaboration.deleteCollaboration(e.id).then(
      () => {
        this.getAllCollaboration();
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getAllCollaboration() {
    this.subEntreprise = this.serviceCollaboration.subCollaboration.subscribe(
      (allEntreprises: any) => {
        this.entreprises = allEntreprises;
      }
    )
    this.serviceCollaboration.getAllColaboration();
  }
}
