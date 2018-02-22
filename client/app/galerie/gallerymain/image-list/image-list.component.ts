import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ImageService} from '../../services/image.service';
import {Image} from '../../models/image';
import {isAsciiHexDigit} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  // images: Image [] = [];
  images: Observable<Image[]>;
  // selectedImage: Image;
  @Output() selectedEvent: EventEmitter<Image> = new EventEmitter<Image>();

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image) {
    this.selectedEvent.emit(image);
  }
}

