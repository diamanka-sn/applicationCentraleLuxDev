import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';

@Component({
  selector: 'app-creer-categorie',
  templateUrl: './creer-categorie.component.html',
  styleUrls: ['./creer-categorie.component.css']
})
export class CreerCategorieComponent implements OnInit {

  subcribCategorie!: Subscription

  formGroup!: FormGroup
  constructor(private categorieFormGroup: FormBuilder, private serviceCategorie: ServicecategorieService, private routes: Router) { }

  ngOnInit(): void {
    this.subcribCategorie = this.serviceCategorie.categoriesubject.subscribe();
    this.iniForm()
  }
  iniForm() {

    this.formGroup = this.categorieFormGroup.group({
      libelle: ['', [Validators.required, Validators.maxLength(100)]],

    })
  }

  submit() {
    const libelle = this.formGroup.value['libelle']
    const newcategorie = {
      libelle: libelle,
    }
    this.serviceCategorie.ajoutCategorie(newcategorie)
    this.routes.navigate(['/categories'])
  }

}
