import { Component, OnInit } from '@angular/core';
import {
  faChampagneGlasses,
  faMapLocation,
  faMessage,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faMapLocation = faMapLocation;
  faMessage = faMessage;
  faChampagneGlasses = faChampagneGlasses;
  faStar = faStar;

  constructor() {}

  ngOnInit(): void {}
}
