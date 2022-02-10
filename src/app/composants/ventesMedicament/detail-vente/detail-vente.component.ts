import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicevendeurService } from 'src/app/services/servicevendeur.service';
import { ServiceventeService } from 'src/app/services/servicevente.service';

@Component({
  selector: 'app-detail-vente',
  templateUrl: './detail-vente.component.html',
  styleUrls: ['./detail-vente.component.css']
})
export class DetailVenteComponent implements OnInit {

  vente!: any
  ventesub!: Subscription
  constructor(private servicevente: ServiceventeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getVente()

  }

  getVente() {
    const id = this.route.snapshot.params['id']
    this.servicevente.getVente(id).then(vente => {
      this.vente = vente
      console.log(vente)
    })
  }

  ngOnDestroy(): void {
    this.ventesub.unsubscribe()

  }

}
