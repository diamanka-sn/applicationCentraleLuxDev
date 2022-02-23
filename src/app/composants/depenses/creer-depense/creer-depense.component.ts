import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicedepenseService } from 'src/app/services/servicedepense.service';

@Component({
  selector: 'app-creer-depense',
  templateUrl: './creer-depense.component.html',
  styleUrls: ['./creer-depense.component.css']
})
export class CreerDepenseComponent implements OnInit {

  formGroup!: FormGroup

  
  constructor(private depenseFormGroup: FormBuilder,
              private serveiceDepense: ServicedepenseService,
              private router: Router
    ) { }

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
    const montant = this.formGroup.get('montant')?.value
    const date = this.formGroup.get('date')?.value
    const description = this.formGroup.get('description')?.value

    const depense = {
      montant: montant,
      date: date,
      description: description
    }

    this.serveiceDepense.addDepense(depense);
    this.formGroup.reset()
    this.router.navigate(['espace/depenses'])
    // alert('valider')
  }

}
