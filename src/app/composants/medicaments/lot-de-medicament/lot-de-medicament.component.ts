import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';

@Component({
  selector: 'app-lot-de-medicament',
  templateUrl: './lot-de-medicament.component.html',
  styleUrls: ['./lot-de-medicament.component.css']
})
export class LotDeMedicamentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};



  formLot!: FormGroup
  medicaments!: any[];
  subscribmedoc!: Subscription;
  constructor(private routes: Router, private medicamentFormGroup: FormBuilder, private servicemedoc: ServicemedicamentService,) {

  }

  methode: string = "submit"
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
      search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }
    this.initformLot()
    this.getMedcament()
  }

  getMedcament() {
    this.subscribmedoc = this.servicemedoc.medocsubject.subscribe((medocs: any[]) => {
      this.medicaments = medocs
    })
    this.servicemedoc.getMedicament()
  }


  initformLot() {
    this.formLot = this.medicamentFormGroup.group({
      libelleLot: ['', Validators.required],
      quantite: [1, Validators.required],
      datePeremption: ['', Validators.required],
      fournisseur: ['', Validators.required]
    })
  }

  submit() {

  }

  ajoutLotModal(m: any) {
    this.formLot.patchValue({ libelleLot: m.libelle })
    $('#ajoutLotModal').modal('show');
  }

  ajoutLot() {
    const libelle = this.formLot.value['libelleLot']
    const dateDePeremption = this.formLot.value['datePeremption']
    const quantite = this.formLot.value['quantite']
    const lot = {
      libelle: libelle,
      dateDePeremption: dateDePeremption,
      quantite: quantite
    }
    console.log(lot)
    this.servicemedoc.ajoutLot(lot)

    $('#ajoutLotModal').modal('hide');
    this.formLot.reset()
  }





  ngOnDestroy() {
    this.subscribmedoc.unsubscribe()
  }



}
