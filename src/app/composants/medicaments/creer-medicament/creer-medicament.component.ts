import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';

@Component({
  selector: 'app-creer-medicament',
  templateUrl: './creer-medicament.component.html',
  styleUrls: ['./creer-medicament.component.css']
})
export class CreerMedicamentComponent implements OnInit {

  subcribMedoc!: Subscription
  catSubs!: Subscription
  categories !: any[];

  $: any

  formGroup!: FormGroup

  constructor(private medicamentFormGroup: FormBuilder, private servicemedoc: ServicemedicamentService, private routes: Router, private sercat: ServicecategorieService) {

  }

  ngOnInit(): void {
    this.subcribMedoc = this.servicemedoc.medocsubject.subscribe();
    this.catSubs = this.sercat.categoriesubject.subscribe((cat: any[]) => {
      this.categories = cat
    })
    this.sercat.getCategorie()
    this.iniForm()

  }

  iniForm() {

    this.formGroup = this.medicamentFormGroup.group({
      libelle: ['', [Validators.required, Validators.maxLength(100)]],
      prixSession: ['', [Validators.required, Validators.min(0)]],
      coefficient: ['', [Validators.required, Validators.min(0)]],
      tva: ['', [Validators.required]],
      datePeremption: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      venteLibre: ['', [Validators.required]],
      fournisseur: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      dosage: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  submit() {
    const libelle = this.formGroup.value['libelle']
    const prixSession = this.formGroup.value['prixSession']
    const tva = this.formGroup.value['tva']
    const coefficient = this.formGroup.value['coefficient']
    const quantite = this.formGroup.value['quantite']
    const venteLibre = this.formGroup.value['venteLibre']
    const datePeremption = this.formGroup.value['datePeremption']
    const dosage = this.formGroup.value['dosage']
    const type = this.formGroup.value['type']

    const lib = libelle + " " + type + " " + dosage
    const med = {
      libelle: lib,
      prixSession: prixSession,
      coefficient: coefficient,
      quantite: quantite,
      venteLibre: venteLibre,
      datePeremption: datePeremption,
      tva: tva,

    }
    this.servicemedoc.ajoutMedicament(med)
    this.formGroup.reset()

    this.routes.navigate(['espace/medicaments'])
  }

}
