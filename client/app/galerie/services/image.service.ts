import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class ImageService {

  BASE_URL = 'http://127.0.0.1:8000/api/v1';

  constructor(private http: Http, private authHttp: AuthHttp) { }

  getImage(id: String): Observable<Image[]> {
    return this.authHttp.get(`${this.BASE_URL}/images/${id}`)
      .map((response: Response) => response.json());
  }

  getImages(): Observable<Image[]> {
    return this.http.get(`${this.BASE_URL}/images`)
      .map((response: Response) => response.json());
  }

  addImage(image: Object): Observable<Image[]> {
    return this.authHttp.post(`${this.BASE_URL}/images`, image)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));
  }

  updateImage(image: Object): Observable<Image[]> {
    const url = `${this.BASE_URL}/images/${image['id']}`;
    return this.authHttp.put(url, image)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
  }

  deleteImage(id: String): Observable<Image[]> {
    return this.authHttp.delete(`${this.BASE_URL}/images/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
  }

  // images: Image [] = [
  //   new Image('1', 'First image', 'First image description',
  //     'assets/img/img1.jpg', 'assets/img/img1-l.jpg'),
  //   new Image('2', 'Second image', 'Second image description',
  //     'assets/img/img2.jpg', 'assets/img/img2-l.jpg'),
  //   new Image('3', 'Third image', 'Third image description',
  //     'assets/img/img3.jpg', 'assets/img/img3-l.jpg'),
  //   new Image('4', 'Fourth image', 'Fourth image description',
  //     'assets/img/img4.jpg', 'assets/img/img4-l.jpg'),
  //   new Image('5', 'Fifth image', 'Fifth image description',
  //     'assets/img/img5.jpg', 'assets/img/img5-l.jpg'),
  //   new Image('6', 'Sixth image', 'Sixth image description',
  //     'assets/img/img6.jpg', 'assets/img/img6-l.jpg'),
  //   new Image('7', 'Seventh image', 'Seventh image description',
  //     'assets/img/img7.jpg', 'assets/img/img7-l.jpg'),
  //   new Image('8', 'Eighth image', 'Eighth image description',
  //     'assets/img/img8.jpg', 'assets/img/img8-l.jpg'),
  // ];

  // getImages() {
  //   return this.images;
  // }

}
