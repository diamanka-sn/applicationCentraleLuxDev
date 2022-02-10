import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodegeographiqueService {

  subcode = new Subject<any[]>();
  codes!: any[]

  constructor(private http: HttpClient) { }

  emitCode() {
    this.subcode.next(this.codes.slice())
  }

  getCode() {
    this.http.get<any[]>('http://localhost:3000/codegeographiques').subscribe(codes => {
      this.codes = codes
      this.emitCode()

    },
      err => {
        console.log(err)
      })
  }

  addCode(code: any) {

    return new Promise((resolve, reject) => {
      this.http.post("http://localhost:3000/codegeographiques", code).subscribe((reponse) => {
        resolve(reponse)
        this.getCode()
      },
        err => {
          reject(err)
        })
    })
  }

  getOneCode(id: number) {

    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:3000/codegeographiques/" + id).subscribe(code => {
        resolve(code)
        this.getCode()
      },
        err => {
          reject(err)
        })
    })

  }

  deleteCode(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete("http://localhost:3000/codegeographiques/" + id).subscribe(code => {
        resolve(code)
        this.getCode()
      },
        err => {
          reject(err)
        })
    })
  }
}
