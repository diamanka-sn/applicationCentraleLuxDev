import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicecommandeService } from 'src/app/services/servicecommande.service';

@Component({
  selector: 'app-creer-commande',
  templateUrl: './creer-commande.component.html',
  styleUrls: ['./creer-commande.component.css']
})
export class CreerCommandeComponent implements OnInit {
  subcribcommande!: Subscription

  formGroup!: FormGroup
  constructor(private commandeFormGroup: FormBuilder, private serviceCommande: ServicecommandeService, private routes: Router) { }

  ngOnInit(): void {
    this.subcribcommande = this.serviceCommande.commandesubject.subscribe();
    this.iniForm()
  }
  iniForm() {

    this.formGroup = this.commandeFormGroup.group({
      date: ['', [Validators.required, Validators.maxLength(100)]],
      cout: ['', [Validators.required, Validators.maxLength(100)]],

    })
  }

  submit() {
    const date = this.formGroup.value['date']
    const cout = this.formGroup.value['cout']
    const newcommande = {
      date: date,
      cout: cout
    }
    this.serviceCommande.ajoutcommande(newcommande)
    this.routes.navigate(['/commander-medicament'])
  }

}
