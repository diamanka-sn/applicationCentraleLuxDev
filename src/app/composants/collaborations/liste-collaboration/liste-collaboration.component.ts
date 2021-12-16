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
  }

  initForm() {
    this.formGroup = this.entrepriseFormGroup.group({
      nom: ['', [Validators.required, Validators.maxLength(100)]],
      adresse: ['', [Validators.required, Validators.maxLength(100)]],
      telephone: ['', [Validators.required, Validators.min(9), Validators.max(9)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      tauxPEC: ['', [Validators.required]]
    })
  }

  submit() {
    alert('valider')
  }

  modifier(e: any) {
    this.formGroup.patchValue({
      nom: e.nom,
      adresse: e.adresse,
      telephone: e.telephone,
      email: e.email,
      tauxPEC: e.tauxPEC
    });

    $('#exampleModal').modal('show')
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
