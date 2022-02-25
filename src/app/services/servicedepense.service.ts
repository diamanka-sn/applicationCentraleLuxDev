import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { config } from 'src/models/config';

@Injectable({
  providedIn: 'root'
})
export class ServicedepenseService {

  subDepense = new Subject<any[]>();
  depenses!: any[];


  constructor(private http: HttpClient) { }

  emitDepenses() {
    this.subDepense.next(this.depenses.slice())
  }
  getDepenseAnnuelle() {
    return this.http.get<any[]>(`${config.apiUrl}/depense/depenses`)
  }
  getDepenseMensuelle() {
    return this.http.get<any[]>(`${config.apiUrl}/depense/depensemensuelle`)
  }
  getAllDepenses() {
    this.http.get<any[]>("http://localhost:3000/depense").subscribe(
      (allDepense) => {
        this.depenses = allDepense;
        console.log(this.depenses)
        this.emitDepenses();
      },
      (err) => {
        console.log(err)
      }
    )
  }
  addDepense(depense: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post("http://localhost:3000/depense", depense).subscribe(
          (dep) => {
            console.log(dep);
            resolve(dep)
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
