import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern, Subscription } from 'rxjs';
import { CodegeographiqueService } from 'src/app/services/codegeographique.service';
import { ServicecategorieService } from 'src/app/services/servicecategorie.service';
import { ServiceformeService } from 'src/app/services/serviceforme.service';
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
  codeGeographique!: any[]
  code!: Subscription
  recherche!: any
  medicaments: any[] = [];
  formes!: any[]
  formesub!: Subscription
  totalLength!: number
  page: number = 1
  meds: any[] = [];
  tailles = [5, 10, 25, 100]
  taille = 5;
  file!: File
  imgFile!: String;
  // lien
  subscribmedoc!: Subscription;
  constructor(private routes: Router,
    private sercat: ServicecategorieService,
    private medicamentFormGroup: FormBuilder,
    private servicemedoc: ServicemedicamentService,
    private servicefournisseur: ServicefournisseurService,
    private serviceCodeG: CodegeographiqueService,
    private servicefrome: ServiceformeService) {

  }

  methode: string = "submit"
  ngOnInit(): void {
    this.recherche = new FormControl('')
    this.catSubs = this.sercat.categoriesubject.subscribe((cat: any[]) => {
      this.categories = cat
    })
    this.fournisseur = this.servicefournisseur.subFournisseur.subscribe((f: any[]) => {
      this.fournisseurs = f
    })
    this.code = this.serviceCodeG.subcode.subscribe((code: any[]) => {
      this.codeGeographique = code
    })
    this.formesub = this.servicefrome.subforme.subscribe((formes: any[]) => {
      this.formes = formes
    })

    this.servicefournisseur.getAllFournisseurs()
    this.sercat.getCategorie()
    this.serviceCodeG.getCode()
    this.servicefrome.getFormes()
    this.iniForm()
    this.initformLot()
    this.medicaments = this.meds
    this.getMedcament()

    console.log("taille medicmanets", this.medicaments)
  }

  getMedcament() {
    this.subscribmedoc = this.servicemedoc.medocsubject.subscribe((medocs: any[]) => {
      console.log("recupration medicament")
      console.log(medocs)
      this.meds = medocs
      this.medicaments = this.meds
      console.log(this.meds)
      this.totalLength = medocs.length
    })
    this.servicemedoc.getMedicament()

  }

  changerPage(event: number) {
    this.page = event
  }

  changerTaille(event: any) {
    this.taille = event.target.value
    this.page = 1
  }

  changer() {
    console.log(this.recherche.value)
    this.page = 1
    return this.medicaments = this.meds.filter(m => m.libelle.toLowerCase().indexOf(this.recherche.value.toLowerCase()) > -1)

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
      image: ['', Validators.required],
      // imgFile: ['', [Validators.required]]
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
    const formData = new FormData();
    formData.append('image', this.formGroup.value['image']);
    const f = this.formGroup.value['forme'].split(" ")
    const libelle = this.formGroup.value['libelle']
    const prixSession = this.formGroup.value['prixSession']
    const tva = this.formGroup.value['tva']
    const coefficient = this.formGroup.value['coefficient']
    const quantite = this.formGroup.value['seuil']
    const venteLibre = this.formGroup.value['venteLibre']
    const code = this.formGroup.value['code_geographique']
    const dosage = this.formGroup.value['dosage']
    const forme = f[1]
    const categorie = this.formGroup.value['categorie']
    const nombre = this.formGroup.value['nombre']

    const lib = libelle + " " + dosage + " " + nombre + " " + f[0]
    const med = {
      libelle: lib,
      prixSession: prixSession,
      coefficient: coefficient,
      seuil: quantite,
      nombre: nombre,
      dosage: dosage,
      venteLibre: venteLibre,
      prixPublic: prixSession * coefficient,
      codeGeographiqueId: code,
      formeId: forme,
      tva: tva,
      categorieId: categorie,
      image: formData
    }
    // 
    formData.append('libelle', lib);
    formData.append('nom', libelle);
    formData.append('nombre', nombre);
    formData.append('prixSession', prixSession);
    formData.append('coefficient', coefficient);
    formData.append('seuil', quantite);
    formData.append('dosage', dosage);
    formData.append('venteLibre', venteLibre);
    formData.append('prixPublic', (prixSession * coefficient).toString());
    formData.append('formeId', forme)
    formData.append('categorieId', categorie)
    formData.append('tva', tva)
    formData.append('codeGeographiqueId', code)

    this.servicemedoc.ajoutMedicament(formData).then(() => {
      this.formGroup.reset()
      $('#exampleModal').modal('hide')
      this.servicemedoc.getMedicament()
    },
      error => {
        console.log(error)
      })

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
    this.catSubs.unsubscribe()
    this.formesub.unsubscribe()
    this.code.unsubscribe()
    this.fournisseur.unsubscribe()

  }

  afficher() {
    $('#exampleModal').show()
  }


  changerImg(event: any) {
    const reader = new FileReader();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.formGroup.patchValue({
          image: file
        });

      };
    }
    // this.formGroup.patchValue({ image: event.target.files[0] })
  }

}
