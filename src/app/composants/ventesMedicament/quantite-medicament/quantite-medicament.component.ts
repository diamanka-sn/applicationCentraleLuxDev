import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quantite-medicament',
  templateUrl: './quantite-medicament.component.html',
  styleUrls: ['./quantite-medicament.component.css']
})
export class QuantiteMedicamentComponent implements OnInit {

  formGroup!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

}
