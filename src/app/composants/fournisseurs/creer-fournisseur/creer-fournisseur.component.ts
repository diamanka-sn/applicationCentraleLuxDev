import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-fournisseur',
  templateUrl: './creer-fournisseur.component.html',
  styleUrls: ['./creer-fournisseur.component.css']
})
export class CreerFournisseurComponent implements OnInit {

  formGroup!: FormGroup

  
  constructor(private fournisseurFormGroup: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = this.fournisseurFormGroup.group({
      nomStructure: ['', [Validators.required, Validators.maxLength(100)]],
      adresse: ['', [Validators.required, Validators.maxLength(100)]],
      telephone: ['', [Validators.required, Validators.min(9), Validators.max(9)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    })
  }

  submit() {
    alert('valider')
  }

}
