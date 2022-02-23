import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceclientService {

  subclient = new Subject<any[]>()
  subclientDetails = new Subject<any>();
  clients!: any[]
  client_details!: any[]

  constructor(private http: HttpClient) { }

  emitclients() {
    this.subclient.next(this.clients.slice())
  }
  emitclientDetails() {
    this.subclientDetails.next(this.client_details.slice())
  }

  getclients() {

    this.http.get<any[]>("http://localhost:3000/client").subscribe(
      (allClient) => {
        this.clients = allClient;
        this.emitclients()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addclient(client: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.post("http://localhost:3000/auth/signup", client).subscribe(
          (response) => {
            console.log(response);
            resolve(response);
          },
          (error) => {
            console.log(error)
            reject(error)
          }
        )
      }
    )
  }

  getDetailClient(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.get<any[]>("http://localhost:3000/client/" + id).subscribe(
          (clientDetail) => {
            console.log(clientDetail)
            resolve(clientDetail)
            // this.client_details = clientDetail ;
            // this.emitclientDetails() ;
          },
          (error) => {
            console.log(error);
            resolve(error)
          }

        )
      }
    )

  }

  modifyClient(id: number, client: any) {
    return new Promise(
      (resolve, reject) => {
        this.http.put("http://localhost:3000/client/" + id, client).subscribe(
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
  deleteClient(id: number) {
    return new Promise(
      (resolve, reject) => {
        this.http.delete("http://localhost:3000/client/" + id.toString()).subscribe(
          (response) => {
            console.log(response)
            resolve(response)
          },
          (error) => {
            console.log(error)
            reject(error)
          }
        )
      }
    )
  }
}
