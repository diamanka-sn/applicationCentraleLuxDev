import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Vendeur {
  id:number;
  nom: string
  prenom: string
  adresse: string
  email: string
  telephone: string
  profil: string
}
@Injectable({
  providedIn: 'root'
})

export class ServicevendeurService {
  subvendeur = new Subject<any[]>()
  vendeurs!: any[]

  constructor(private http: HttpClient) { }

  emitvendeurs() {
    this.subvendeur.next(this.vendeurs.slice())
  }

  getvendeurs() {
    this.http.get<any[]>("http://localhost:3000/vendeur").subscribe(
      (allVendeur) => {
        this.vendeurs = allVendeur ;
        this.emitvendeurs()
        console.log(this.vendeurs)
      }
    )
  }

  addvendeur(vendeur: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post("http://localhost:3000/auth/signup", vendeur).subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        )
      }
    )
  }

  modifyVendeur(id: number, vendeur: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.put("http://localhost:3000/vendeur/" + id, vendeur).subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (error) => {
            console.log(error);
            reject(error)
          }
        )
      }
    )
  }

  deleteVendeur(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.delete("http://localhost:3000/vendeur/" + id).subscribe(
          (response) => {
            console.log(response);
            resolve(response)
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        )
      }
    )
  }

  getDetailVendeur(id: number) {
    const vendeur = this.vendeurs[id]
    return vendeur;
  }
}
