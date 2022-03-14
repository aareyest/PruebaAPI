import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Beneficio } from 'src/models/beneficio';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  myAppUrl = '';

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl + 'api/Beneficio/';
  }


  getBeneficio() {
    return this._http.get(this.myAppUrl + 'Index').pipe(map(
      response => {
        return response;
      }));
  }

  getBeneficioById(idbeneficios: number) {
    return this._http.get(this.myAppUrl + 'Details/' + idbeneficios)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveBeneficio(beneficio: Beneficio) {
    return this._http.post(this.myAppUrl + 'Create', beneficio)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateBeneficio(beneficio: Beneficio) {
    return this._http.put(this.myAppUrl + 'Edit', beneficio)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteBeneficio(idbeneficios: number) {
    return this._http.delete(this.myAppUrl + 'Delete/' + idbeneficios)
      .pipe(map(
        response => {
          return response;
        }));
  }
}
