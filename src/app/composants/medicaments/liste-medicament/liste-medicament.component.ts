import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern, Subscription } from 'rxjs';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';
import { ServicefournisseurService } from 'src/app/services/servicefournisseur.service';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';


@Component({
  selector: 'app-liste-medicament',
  templateUrl: './liste-medicament.component.html',
  styleUrls: ['./liste-medicament.component.css']
})
export class ListeMedicamentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  catSubs!: Subscription;
  fournisseur!: Subscription
  fournisseurs!: any[]
  formGroup!: FormGroup;
  formLot!: FormGroup
  categories!: any[];
  medicaments!: any[];
  subscribmedoc!: Subscription;
  constructor(private routes: Router, private sercat: ServicecategorieService, private medicamentFormGroup: FormBuilder, private servicemedoc: ServicemedicamentService, private servicefournisseur: ServicefournisseurService) {

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
    this.catSubs = this.sercat.categoriesubject.subscribe((cat: any[]) => {
      this.categories = cat
    })
    this.fournisseur = this.servicefournisseur.subFournisseur.subscribe((f: any[]) => {
      this.fournisseurs = f
    })
    this.servicefournisseur.getAllFournisseurs()
    this.sercat.getCategorie()
    this.iniForm()
    this.initformLot()
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
      prixSession: [0, [Validators.required, Validators.min(0)]],
      coefficient: [0, [Validators.required, Validators.min(0)]],
      tva: [0, [Validators.required]],
      code_geographique: ['', [Validators.required]],
      seuil: [0, [Validators.required]],
      venteLibre: ['', [Validators.required]],
      nombre: [0,],
      categorie: ['', [Validators.required]],
      dosage: ['',],
      forme: ['', [Validators.required]],
    })
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
    const libelle = this.formGroup.value['libelle']
    const prixSession = this.formGroup.value['prixSession']
    const tva = this.formGroup.value['tva']
    const coefficient = this.formGroup.value['coefficient']
    const quantite = this.formGroup.value['seuil']
    const venteLibre = this.formGroup.value['venteLibre']
    const code_geographique = this.formGroup.value['code_geographique']
    const dosage = this.formGroup.value['dosage']
    const forme = this.formGroup.value['forme']
    const categorie = this.formGroup.value['categorie']

    const lib = libelle + " " + forme + " " + dosage
    const med = {
      libelle: lib,
      prixSession: prixSession,
      coefficient: coefficient,
      seuil: quantite,
      quantite: quantite,
      venteLibre: venteLibre,
      code_geographique: code_geographique,
      forme: forme,
      tva: tva,
      categorie: categorie
    }
    this.servicemedoc.ajoutMedicament(med)
    this.formGroup.reset()
    $('#exampleModal').modal('hide')
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

  modifier(medicament: any) {

    this.formGroup.patchValue({
      libelle: medicament.libelle,
      prixSession: medicament.prixSession,
      coefficient: medicament.coefficient,
      quantite: medicament.quantite,
      venteLibre: medicament.venteLibre,
      code_geographique: medicament.code_geographique,
      liste: medicament.liste,
      categorie: medicament.categorie,
      dosage: medicament.dosage,
      forme: medicament.type
    })
    console.log(medicament)
    $('#exampleModal').modal('show')

  }

  valider() {
    alert("valider")
  }

  modif() {
    this.methode = "modifier"
    console.log("modifier")
    $('#exampleModal').modal('hide')
  }


  ngOnDestroy() {
    this.subscribmedoc.unsubscribe()
  }

  afficher() {
    $('#exampleModal').show()
  }

}
