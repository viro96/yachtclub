import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegattenEventService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getRegattenEvents(): Observable<any> {
    return this.http.get('/api/regattenevents').map(res => res.json());
  }

  countRegattenEvents(): Observable<any> {
    return this.http.get('/api/regattenevents/count').map(res => res.json());
  }

  addRegattenEvent(regattenevent): Observable<any> {
    return this.http.post('/api/regattenevent', JSON.stringify(regattenevent), this.options);
  }

  getRegattenEvent(regattenevent): Observable<any> {
    return this.http.get(`/api/regattenevent/${regattenevent._id}`).map(res => res.json());
  }

  editRegattenEvent(regattenevent): Observable<any> {
    return this.http.put(`/api/regattenevent/${regattenevent._id}`, JSON.stringify(regattenevent), this.options);
  }

  deleteRegattenEvent(regattenevent): Observable<any> {
    return this.http.delete(`/api/regattenevent/${regattenevent._id}`, this.options);
  }

}
