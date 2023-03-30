import { Component, OnInit } from '@angular/core';
import {
  faCalendarCheck,
  faMapLocation,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faRocket = faRocket;
  faMapLocation = faMapLocation;
  faCalendarCheck = faCalendarCheck;
  showNavigationIndicators = true;
  showNavigationArrows = true;
  slides: slide[];

  constructor() {
    this.slides = this.shuffleArray(slides);
  }

  ngOnInit(): void {}

  shuffleArray<Type>(array: Type[]): Type[] {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

interface slide {
  img: string;
  title: string;
  quote: string;
}

let slides: slide[] = [
  {
    img: 'assets/portrait/chropfchroette_035.png',
    title: 'Elvira',
    quote: "Hauptsach s'Pendel schwingt",
  },
  {
    img: 'assets/portrait/chropfchroette_071.png',
    title: 'Commander',
    quote: 'Nu kei Ufregig  - i han alls em Griff… Bobby säg au emol öppis !',
  },
  {
    img: 'assets/portrait/chropfchroette_236.png',
    title: 'Traumhild',
    quote: 'Gopf Göpf mer händ gunne!!',
  },
];
