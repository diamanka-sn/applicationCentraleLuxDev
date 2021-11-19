import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-medicament',
  templateUrl: './creer-medicament.component.html',
  styleUrls: ['./creer-medicament.component.css']
})
export class CreerMedicamentComponent implements OnInit {

  formGroup!: FormGroup

  constructor(private medicamentFormGroup: FormBuilder) {

  }

  ngOnInit(): void {
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
      categorie: ['', [Validators.required]]
    })
  }

  submit() {
    alert('valider')
  }

}
