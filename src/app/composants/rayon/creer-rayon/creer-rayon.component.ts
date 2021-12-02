import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicerayonService } from 'src/app/services/servicerayon.service';

@Component({
  selector: 'app-creer-rayon',
  templateUrl: './creer-rayon.component.html',
  styleUrls: ['./creer-rayon.component.css']
})
export class CreerRayonComponent implements OnInit {

  subcribrayon!: Subscription

  formGroup!: FormGroup
  constructor(private rayonFormGroup: FormBuilder, private servicerayon: ServicerayonService, private routes: Router) { }

  ngOnInit(): void {
    this.subcribrayon = this.servicerayon.rayonsubject.subscribe();
    this.iniForm()
  }
  iniForm() {

    this.formGroup = this.rayonFormGroup.group({
      rayon: ['', [Validators.required, Validators.maxLength(100)]],

    })
  }

  submit() {
    const nomRayon = this.formGroup.value['rayon']
    const newrayon = {
      libelle: nomRayon,
    }
    this.servicerayon.ajoutrayon(newrayon)
    //this.routes.navigate(['/rayons'])
  }
}
