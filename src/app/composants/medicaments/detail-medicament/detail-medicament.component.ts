import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ServicemedicamentService } from 'src/app/services/servicemedicament.service';

@Component({
  selector: 'app-detail-medicament',
  templateUrl: './detail-medicament.component.html',
  styleUrls: ['./detail-medicament.component.css']
})
export class DetailMedicamentComponent implements OnInit {
  medicament!: any
  submedoc!: Subscription
  constructor(private servicem: ServicemedicamentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    this.submedoc = this.servicem.medocsubject.subscribe();
    this.medicament = this.servicem.getMedicamentDetail(+id);
    console.log(this.medicament)

  }

}
