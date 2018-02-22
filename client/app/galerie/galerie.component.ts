import { Component, OnInit } from '@angular/core';
import { Image } from './models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  selectedImage: Image;

  constructor() { }

  ngOnInit() {
  }

  selectImage(image: Image) {
    this.selectedImage = image;
  }

}
