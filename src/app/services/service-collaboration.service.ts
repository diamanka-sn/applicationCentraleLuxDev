import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCollaborationService {

  subCollaboration = new Subject<any[]>();
  collaboration!: any[];

  constructor(private http: HttpClient) { }
 
  emitCollaboration() {
    this.subCollaboration.next(this.collaboration.slice());
  }
  getAllColaboration() {
    this.http.get<any[]>("http://localhost:3000/entreprise").subscribe(
      (allCollaborations) => {
        this.collaboration = allCollaborations;
        this.emitCollaboration();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  addCollaboration(collaboration: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post("http://localhost:3000/entreprise", collaboration).subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (error) =>{
            console.log(error);
            reject(error);
          }
        )
      }
    )
  }

  modifyCollaboration(id:number, collaboration: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.put("http://localhost:3000/entreprise/" + id, collaboration).subscribe(
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

  deleteCollaboration(id: number)  {
    return new Promise(
      (resolve, reject) => {
        this.http.delete("http://localhost:3000/entreprise/" + id).subscribe(
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

  getCollaborationDetail(id: number){
    const entreprise = this.collaboration[id]
    return entreprise;
  }
}
