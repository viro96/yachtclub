import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegattaResultService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getRegattaResults(): Observable<any> {
    return this.http.get('/api/regattaresult').map(res => res.json());
  }

  countRegattaResult(): Observable<any> {
    return this.http.get('/api/regattaresult/count').map(res => res.json());
  }

  addRegattaResult(regattaresult): Observable<any> {
    return this.http.post('/api/regattaresult', JSON.stringify(regattaresult), this.options);
  }

  getRegattaResult(regattaresult): Observable<any> {
    return this.http.get(`/api/regattaresult/${regattaresult._id}`).map(res => res.json());
  }

  editRegattaResult(regattaresult): Observable<any> {
    return this.http.put(`/api/regattaresult/${regattaresult._id}`, JSON.stringify(regattaresult), this.options);
  }

  deleteRegattaResult(regattaresult): Observable<any> {
    return this.http.delete(`/api/regattaresult/${regattaresult._id}`, this.options);
  }

}
