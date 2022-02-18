import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypepaiementService } from 'src/app/services/typepaiement.service';

@Component({
  selector: 'app-typepaiement',
  templateUrl: './typepaiement.component.html',
  styleUrls: ['./typepaiement.component.css']
})
export class TypepaiementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  formGroup!: FormGroup;
  typespaiement: any[] = [];
  subscribType!: Subscription
  imgFile!: any
  constructor(private routes: Router, private servicetype: TypepaiementService, private form: FormBuilder) {

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
      // search: true,
      // columns: [{ data: 'nom' }, { data: 'adresse' }, { data: 'ville' }, { data: 'age' }]

    }
    this.initform()
    this.getsTypePaiement();

  }

  initform() {
    this.formGroup = this.form.group({
      libelle: ['', [Validators.required, Validators.maxLength(100)]],
      codeMarchant: [''],
      image: ['', Validators.required]
      // code: this.form.array([])
    })
  }

  getsTypePaiement() {
    this.subscribType = this.servicetype.subtypepayement.subscribe((types: any[]) => {
      this.typespaiement = types
    })
    this.servicetype.getTypePaiement()
  }

  modifier(c: any) { }

  onDestroy(): void {
    this.subscribType.unsubscribe()
  }

  submit() {
    const formdata = new FormData()
    const libelle = this.formGroup.value['libelle']
    const codeMarchant = this.formGroup.value['codeMarchant']
    const image = this.formGroup.value['image']
    console.log(libelle, codeMarchant, image)
    formdata.append("libelle", libelle)
    formdata.append("codeMarchant", codeMarchant)
    formdata.append("image", image)
    this.servicetype.addTypePaiement(formdata).then((type) => {
      console.log(type)
      this.formGroup.reset()
      this.imgFile = ""
      this.servicetype.getTypePaiement()
    },
      err => {
        console.log(err)
      });
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
