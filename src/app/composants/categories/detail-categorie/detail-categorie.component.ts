import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicedetailcategorieService } from 'src/app/services/servicedetailcategorie.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.css']
})
export class DetailCategorieComponent implements OnInit {

  id!: string ;
  subMedicamentByCategorie!: Subscription ;
  medicamnetByCategorie: any[] = [] ;
  dtOptions: DataTables.Settings = {} ;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private servicedetailcategorie: ServicedetailcategorieService) { }
  

  ngOnInit(): void {

    // PARAMETRES DU DATABLES
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      autoWidth: true,
      dom: "<'row mb-4'<'col-sm-12 col-md-8'l><'col-sm-12 col-md-4' f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 pull-right col-md-5' p>>",
        language: { url: 'assets/datatable-French.json'},
        search: true,

    }



    const id = this.route.snapshot.params['id'] ;
    this.id = id ;

    this.subMedicamentByCategorie = this.servicedetailcategorie.subMedicamentBycategorie.subscribe(
      (medocsByCategorie: any[]) => {
        this.medicamnetByCategorie = medocsByCategorie ;
        console.log("!!!!!!!!!!!!!!    " + this.medicamnetByCategorie)
      }
    );
    this.servicedetailcategorie.getAllMedicamnentByCategorie(+this.id) ;
    console.log("!!!!!!!!!!!!!!    " + this.medicamnetByCategorie)
    
  }

}
