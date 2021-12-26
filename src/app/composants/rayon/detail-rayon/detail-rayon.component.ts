import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicedetailrayonService } from 'src/app/services/servicedetailrayon.service';
import { ServicerayonService } from 'src/app/services/servicerayon.service';

@Component({
  selector: 'app-detail-rayon',
  templateUrl: './detail-rayon.component.html',
  styleUrls: ['./detail-rayon.component.css']
})
export class DetailRayonComponent implements OnInit {
  
  subMedicamentByRayon!: Subscription ;
  medicamentByRayon: any[] = [] ;
  formGroupAddMedocRayon!: FormGroup ;

  rayon: any = {} ;

  dtOptions: DataTables.Settings = {} ;

  constructor(private servicedetailrayon: ServicedetailrayonService,
              private servicerayon: ServicerayonService,
              private formbuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'] ;
    this.subMedicamentByRayon =  this.servicedetailrayon.subMedicamentByRayon.subscribe(
      (medocByRayon: any[]) => {
        this.medicamentByRayon = medocByRayon ;
        console.log('%%%%     ' + this.medicamentByRayon) ;
      }
    );
    this.servicedetailrayon.getAllMedicamentByRayon(+id) ;

    // Recuperation de l'objet rayon
    this.rayon = this.servicerayon.getRayonById(+id) ;


    // PARAMETRES DE LA DATARABLES
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      language: { url: 'assets/datatable-French.json'},
      dom: "<'row mb-4'<'col-sm-12 col-md-8'l><'col-sm-12 col-md-4' f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 pull-right col-md-5' p>>",
    }
    // PARAMETRE DU FORMULAIRE AJOUT MEDOC AU RAYON
    this.formGroupAddMedocRayon = this.formbuilder.group({
      quantite: [1, [Validators.required, Validators.min(1)]]
    })
  }

  mOfModal!: any ;
  action!: string ;

  ajouterMedicamentAuRayonModal(m: any, message:string) {
    this.mOfModal = m ;
    this.action = message ;
    console.log("££££££££££    " + this.mOfModal.libelle) ;
    $("#ajouterMedicamentAuRayon").modal("show") ;
  }

  retirerMedicamentAuRayon(m: any) {
    this.servicedetailrayon.removeMedicamentAuRayon(m)
  }

  submitAdd() {
    const quantite = this.formGroupAddMedocRayon.value['quantite'] ;
    console.log("££££££££££    " + this.mOfModal.libelle) ;
    console.log('submitedddddddddddddddd  ' + quantite) ;
    this.formGroupAddMedocRayon.reset() ;
    this.servicedetailrayon.operationMedicamentAuRayon(this.mOfModal, quantite, this.action) ;
    this.mOfModal = {} ;
  }

  

}
