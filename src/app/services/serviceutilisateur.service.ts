import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceutilisateurService {

  subutilisateur = new Subject<any[]>()
  utilisateurs!: any[]

  constructor(private http: HttpClient) { }

  emitUtilisateurs() {
    this.subutilisateur.next(this.utilisateurs.slice())
  }

  getUtilisateurs() {
    this.http.get<any[]>("http://localhost:3000/vendeur").subscribe(
      (allVendeur) => {
        this.utilisateurs = allVendeur ;
        this.emitUtilisateurs() ;
      }
    )
    // this.utilisateurs = [
    //   {
    //     nom: 'diallo',
    //     prenom: 'assane',
    //     adresse: 'dakar',
    //     email: 'assane@gmail.com',
    //     telephone: '77777777',
    //     profil: 'client'
    //   },
    //   {
    //     nom: 'gueye',
    //     prenom: 'mouctar',
    //     adresse: 'dakar',
    //     email: 'mouctar@gmail.com',
    //     telephone: '77777347',
    //     profil: 'vendeur'
    //   },
    //   {
    //     nom: 'cisse',
    //     prenom: 'yakhouba',
    //     adresse: 'dakar',
    //     email: 'yakhouba@gmail.com',
    //     telephone: '72356777',
    //     profil: 'client'
    //   },
    //   {
    //     nom: 'diamanka',
    //     prenom: 'mouhamaou',
    //     adresse: 'dakar',
    //     email: 'mouhamadou@gmail.com',
    //     telephone: '7777',
    //     profil: 'client'
    //   },
    // ]
    // this.emitUtilisateurs()
  }

  addUser(vendeur: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post("http://localhost:3000/vendeur", vendeur).subscribe(
          (v) => {
            console.log(v)
            resolve(v);
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
        this.http.put("localhost:3000/vendeur/" + id, vendeur).subscribe(
          (response) => {
            console.log(response);
            resolve(response)
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
        this.http.delete("localhost:3000/vendeur/" + id).subscribe(
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
}
