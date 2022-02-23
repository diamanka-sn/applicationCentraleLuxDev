import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicerayonService {


  rayon!: any[];
  rayonsubject = new Subject<any[]>()

  constructor(private http: HttpClient) { }

  emitrayon() {
    this.rayonsubject.next(this.rayon.slice())
  }

  getrayon() {
    this.http.get("http://localhost:3000/rayon").subscribe(
      (allrayon:any) => {
        this.rayon = allrayon ;
        console.log(allrayon)
        this.emitrayon() ;
      },
      (err) => {
        console.log(err);
      }
    )



    // this.rayon = [
    //   {
    //     libelle: 'Deparasitant',

    //   },
    //   {
    //     libelle: 'anti douleur',

    //   },
    //   {
    //     libelle: 'Douleur et Fiévre',

    //   },
    //   {
    //     libelle: 'Antibiotique',

    //   },
    // ]
    // this.emitrayon();
  }

  getOneRayon(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.get("http://localhost:3000/rayon/" + id).subscribe(
          (response) => {
            console.log(response)
            resolve(response)
          },
          (err) => {
            console.log(err)
            reject(err)
          }
        )
      }
    )
  }

  ajoutrayon(rayon: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post("http://localhost:3000/rayon", rayon).subscribe(
          (response) => {
            console.log(response)
            resolve(response)
          },
          (err) => {
            console.log(err)
            reject(err)
          }
        )

      }
    )
    // this.rayon.push(rayon)
    // this.emitrayon()

  }
  modifyRayon(id: number, rayon: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.put("http://localhost:3000/rayon/" + id, rayon).subscribe(
          (response) => {
            console.log(response)
            resolve(response)
          },
          (err) => {
            console.log(err)
            reject(err)
          }
        )
      }
    )
  }

  deleteRayon(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.delete("http://localhost:3000/rayon/" + id).subscribe(
          (response) => {
            console.log(response)
            resolve(response)
          },
          (err) => {
            console.log(err)
            reject(err)
          }
        )
      }
    )
  }

  getRayonById(id: number) {
    return this.rayon[id - 1] ;
  }
}
