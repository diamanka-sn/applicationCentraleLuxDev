import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern, Subscription } from 'rxjs';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';


@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  catSubs!: Subscription;
  formGroup!: FormGroup;
  formLot!: FormGroup
  categories!: any[];
  medicaments!: any[];
  subscribmedoc!: Subscription;
  constructor(private routes: Router, private sercat: ServicecategorieService, private medicamentFormGroup: FormBuilder, private servicemedoc: ServicemedicamentService) {

  }

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
    this.catSubs = this.sercat.categoriesubject.subscribe((cat: any[]) => {
      this.categories = cat
    })
    this.sercat.getCategorie()
    this.iniForm()
    this.getMedcament()

  }

  getMedcament() {
    this.subscribmedoc = this.servicemedoc.medocsubject.subscribe((medocs: any[]) => {
      this.medicaments = medocs
    })
    this.servicemedoc.getMedicament()
  }

  iniForm() {

    this.formGroup = this.medicamentFormGroup.group({
      libelle: ['', [Validators.required, Validators.maxLength(100)]],
      prixSession: ['', [Validators.required, Validators.min(0)]],
      coefficient: ['', [Validators.required, Validators.min(0)]],
      tva: [0, [Validators.required]],
      code_geographique: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      venteLibre: ['', [Validators.required]],
      liste: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      dosage: ['', [Validators.required]],
      forme: ['', [Validators.required]]
    })

    this.formLot = this.medicamentFormGroup.group({
      libelle: ['', Validators.required],
      quantite: [1, Validators.required],
      datePeremption: ['', Validators.required],
      fournisseur: ['', Validators.required]
    })
  }

  submit() {
    const libelle = this.formGroup.value['libelle']
    const prixSession = this.formGroup.value['prixSession']
    const tva = this.formGroup.value['tva']
    const coefficient = this.formGroup.value['coefficient']
    const quantite = this.formGroup.value['quantite']
    const venteLibre = this.formGroup.value['venteLibre']
    const code_geographique = this.formGroup.value['code_geographique']
    const dosage = this.formGroup.value['dosage']
    const form = this.formGroup.value['type']
    const liste = this.formGroup.value['liste']

    const lib = libelle + " " + form + " " + dosage
    const med = {
      libelle: lib,
      prixSession: prixSession,
      coefficient: coefficient,
      quantite: quantite,
      venteLibre: venteLibre,
      code_geographique: code_geographique,
      forme: form,
      tva: tva,
      liste: liste
    }
    this.servicemedoc.ajoutMedicament(med)
    this.formGroup.reset()
  }

  ajoutLotModal(m: any) {
    console.log(m)
    $('#ajoutLotModal').modal('show');
  }

  ajoutLot() {
    alert('ajouter')
  }

  modifier(medicament: any) {
    // this.formGroup.setValue({
    //   libelle: medicament.libelle,
    //   prixSession: medicament.prixSession,
    //   coefficient: medicament.coefficient,
    //   quantite: medicament.quantite,
    //   venteLibre: medicament.venteLibre,
    //   datePeremption: medicament.datePeremption,
    //   fournisseur: medicament.fournisseur,
    //   categorie: medicament.categorie,
    //   dosage: medicament.dosage,
    //   type: medicament.type
    // })
    console.log(medicament)
    $('#exampleModal').modal('show')

  }


  ngOnDestroy() {
    this.subscribmedoc.unsubscribe()
  }

  afficher() {
    $('#exampleModal').show()
  }

}
