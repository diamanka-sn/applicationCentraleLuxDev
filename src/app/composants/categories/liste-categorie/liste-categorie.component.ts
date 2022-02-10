import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  formGroup!: FormGroup;
  categories: any[] = [];
  subscribCategorie!: Subscription
  constructor(private routes: Router, private servicecategorie: ServicecategorieService, private form: FormBuilder) {

  }

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
    this.initform()
    this.getCategorie()

  }

  initform() {
    this.formGroup = this.form.group({
      libelle: ['', [Validators.required, Validators.maxLength(100)]],
      // code: this.form.array([])
    })
  }

  addCode() {
    const newControl = this.form.control('', Validators.required)
    this.getcode().push(newControl)
  }

  getcode(): FormArray {
    return this.formGroup.get('code') as FormArray;
  }

  getLibelle() {

    return this.formGroup.value['libelle']

  }

  submit() {
    const libelle = this.formGroup.value['libelle']
    const newcategorie = {
      libelle: libelle,
    }
    this.servicecategorie.ajoutCategorie(newcategorie).then(message => {
      this.formGroup.reset()
      $('#exampleModal').modal('hide')
    })
      .catch(err => {
        console.log(err)
      })

  }

  getCategorie() {
    this.subscribCategorie = this.servicecategorie.categoriesubject.subscribe((categorie: any[]) => {
      this.categories = categorie
    })
    this.servicecategorie.getCategorie()
  }

  modifier(categorie: any) {
    this.formGroup.setValue({ libelle: categorie.libelle })
    $('#exampleModal').modal('show')
  }

  ngOnDestroy() {
    this.subscribCategorie.unsubscribe()
  }
}
