import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class YouthEventService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getYouthEvents(): Observable<any> {
    return this.http.get('/api/youthevents').map(res => res.json());
  }

  countYouthEvents(): Observable<any> {
    return this.http.get('/api/youthevents/count').map(res => res.json());
  }

  addYouthEvent(youthevent): Observable<any> {
    return this.http.post('/api/youthevent', JSON.stringify(youthevent), this.options);
  }

  getYouthEvent(youthevent): Observable<any> {
    return this.http.get(`/api/youthevent/${youthevent._id}`).map(res => res.json());
  }

  editYouthEvent(youthevent): Observable<any> {
    return this.http.put(`/api/youthevent/${youthevent._id}`, JSON.stringify(youthevent), this.options);
  }

  deleteYouthEvent(youthevent): Observable<any> {
    return this.http.delete(`/api/youthevent/${youthevent._id}`, this.options);
  }

}
