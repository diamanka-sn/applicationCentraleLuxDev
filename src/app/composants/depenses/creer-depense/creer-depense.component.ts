import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creer-depense',
  templateUrl: './creer-depense.component.html',
  styleUrls: ['./creer-depense.component.css']
})
export class CreerDepenseComponent implements OnInit {

  formGroup!: FormGroup

  
  constructor(private depenseFormGroup: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = this.depenseFormGroup.group({
      description: ['', [Validators.required, Validators.maxLength(100)]],
      montant: ['', [Validators.required, Validators.min(1)]],
      date: ['', [Validators.required]],
    })
  }

  submit() {
    alert('valider')
  }

}
