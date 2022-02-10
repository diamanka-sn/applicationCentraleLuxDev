import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CodegeographiqueService } from 'src/app/services/codegeographique.service';

@Component({
  selector: 'app-codegoegraphique',
  templateUrl: './codegoegraphique.component.html',
  styleUrls: ['./codegoegraphique.component.css']
})
export class CodegoegraphiqueComponent implements OnInit {

  codegeographiques: any[] = []
  dtOptions: DataTables.Settings = {};
  serviceCodeG!: Subscription
  formGroup!: FormGroup

  constructor(private route: Router, private service: CodegeographiqueService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    this.getCode()
  }

  initForm() {
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
    this.formGroup = this.form.group({
      libelle: ["", [Validators.required]]
    })
  }

  getCode() {
    this.serviceCodeG = this.service.subcode.subscribe((codes: any[]) => {
      this.codegeographiques = codes
    })
    this.service.getCode()
  }

  submit() {
    const libelle = this.formGroup.value['libelle']
    const donnees = {
      libelle: libelle
    }
    this.service.addCode(donnees).then(message => {
      console.log(message)
      $('#exampleModale').modal('hide')
    },
      err => {
        console.log(err)
      })
  }
  modifier(c: number) { }

}
