import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';
import { ServiceventeService } from 'src/app/services/servicevente.service';

@Component({
  selector: 'app-creer-vente',
  templateUrl: './creer-vente.component.html',
  styleUrls: ['./creer-vente.component.css']
})
export class CreerVenteComponent implements OnInit {

  formGroup!: FormGroup ;
  subVente!: Subscription ;
  
  venteMedocs: any[] = [];

  medicaments!: any[] ;
  subMedicament!: Subscription ;

  dtOptions: DataTables.Settings = {}

  libelle!: string ;
  coefficient!: number;
  prixSession!: number ;
  total: number = 0 ;
  

  constructor(private form: FormBuilder, 
              private router: Router, 
              private servicevente: ServiceventeService,
              private servicemedicament: ServicemedicamentService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json' },
      // data: this.personne,
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }

    this.getAllMedicament() ;
    this.initForm() ;
    this.servicevente.subvente.subscribe() ;
  }

  getAllMedicament() {
    this.subMedicament = this.servicemedicament.medocsubject.subscribe(
      (medocs: any[]) => {
        this.medicaments = medocs ;
      }
    );
    this.servicemedicament.getMedicament() ;
  }

  initForm() {
    this.formGroup = this.form.group({
      libelle: ["", Validators.required],
      quantite: [1, [Validators.required]]
    })
  }

  selected(m: any) {
    this.libelle = m.libelle ;
    this.prixSession = m.prixSession ;
    this.coefficient = m.coefficient ;
    console.log('******************************       ' + this.libelle) ;
    console.log('******************************       ' + this.prixSession) ;
    console.log('******************************       ' + this.coefficient) ;

  }

  ajouterMedicamentDansVente() {
    // const libelle = this.formGroup.value['libelle'] ;
    console.log(this.libelle);
    const quantite = this.formGroup.value['quantite'];
    console.log(quantite)
    this.total = this.total + (this.prixSession * this.coefficient * quantite) ;

    // const m = [this.libelle, quantite]
    const isInTab = this.venteMedocs.filter((v) => {
      return v.libelle == this.libelle ;
    });
    if(isInTab.length != 0){ 
      console.log( "********isInTab   " + isInTab[0].libelle ) ;
      // this.venteMedocs.
    }
    
    const m = {libelle:this.libelle, quantite: quantite, coefficient:this.coefficient, prixSession:this.prixSession} ;
    this.venteMedocs.push(m);


    this.formGroup.reset() ;
    this.router.navigate(['espace/creer-vente']) ;
  }

  submit() {
    const libelle = this.formGroup.value['libelle'] ;
    const quantite = this.formGroup.value['quantite'] ;
    console.log('******  ' + libelle) ;
    console.log('*****    ' + quantite) ;
    const vente = {
      libelle: libelle,
      quantite: quantite
    };
    
    this.servicevente.addVente(vente) ;
    this.formGroup.reset() ;
    this.router.navigate(['/espace/creer-vente']) ;
    
  }

  addMedoc() {
    const libelle = this.formGroup.value['libelle'] ;
    console.log("$$$$$$       " + libelle) ;
    const quantite = this.formGroup.value['quantite'] ;
    console.log("$$$$$$$    " + quantite) ;
  }

  

}
