import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.scss'],
})
export class PhotoSliderComponent implements OnInit {
  @Input() photos!: string[];
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor() {}

  ngOnInit(): void {
    this.carousel.pause();
  }
}
