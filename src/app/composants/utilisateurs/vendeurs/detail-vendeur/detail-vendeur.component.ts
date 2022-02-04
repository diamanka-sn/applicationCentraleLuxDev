import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicevendeurService, Vendeur } from 'src/app/services/servicevendeur.service';

@Component({
  selector: 'app-detail-vendeur',
  templateUrl: './detail-vendeur.component.html',
  styleUrls: ['./detail-vendeur.component.css']
})
export class DetailVendeurComponent implements OnInit {
  vendeur: Vendeur[] = [];
  subvendeur!: Subscription
  constructor(private vendeurs: ServicevendeurService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    this.subvendeur = this.vendeurs.subvendeur.subscribe();
    console.log(id)
    this.vendeur = this.vendeurs.getDetailVendeur(parseInt(id));
    console.log(this.vendeur)
  }
  showDetailVendeur(id: any) {
    this.vendeur.forEach(el => {
      if (id == el.id) {
        this.vendeurs.getDetailVendeur(id).subscribe()
      }
    })
  }

}
