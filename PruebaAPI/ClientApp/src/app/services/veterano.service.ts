import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Veterano } from 'src/models/veterano';

@Injectable({
  providedIn: 'root'
})
export class VeteranoService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl + 'api/Veterano/';
  }


  getVeterano() {
    return this._http.get(this.myAppUrl + 'Index').pipe(map(
      response => {
        return response;
      }));
  }

  getVeteranoById(idveterano: number) {
    return this._http.get(this.myAppUrl + 'Details/' + idveterano)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveVeterano(veterano: Veterano) {
    return this._http.post(this.myAppUrl + 'Create', veterano)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateVeterano(veterano: Veterano) {
    return this._http.put(this.myAppUrl + 'Edit', veterano)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteVeterano(idveterano: number) {
    return this._http.delete(this.myAppUrl + 'Delete/' + idveterano)
      .pipe(map(
        response => {
          return response;
        }));
  }
}
