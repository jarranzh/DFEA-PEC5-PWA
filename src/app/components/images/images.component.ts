import { ImagesService } from './../../services/images.service';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/images.interface';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.imageService
      .getAllImages()
      .subscribe(images => (this.images = images));
  }
}
