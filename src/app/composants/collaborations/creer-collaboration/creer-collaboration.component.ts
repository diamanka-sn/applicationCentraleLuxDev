import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-collaboration',
  templateUrl: './creer-collaboration.component.html',
  styleUrls: ['./creer-collaboration.component.css']
})
export class CreerCollaborationComponent implements OnInit {

  formGroup!: FormGroup

  
  constructor(private entrepriseFormGroup: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = this.entrepriseFormGroup.group({
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
