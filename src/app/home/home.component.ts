import { Component, OnInit } from '@angular/core';
import { faCalendarCheck, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faRocket = faRocket;
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
    img: 'assets/portrait/chropfchroette_032.png',
    title: 'Quak, Quik & Quäk',
    quote:
      'Ufem Planet Chrotte Grotte het ganz e huufe Fröschli. Chlini, grossi, schöni ond wüeschti.',
  },
  {
    img: 'assets/portrait/chropfchroette_035.png',
    title: 'Elvira',
    quote: "hauptsach s'Pendel schwingt",
  },
  {
    img: 'assets/portrait/chropfchroette_071.png',
    title: 'El Capitano',
    quote:
      "Sicherheit und Kontrolle, mini Dame ond Herre, das esch s'Wechtigscht!",
  },
  {
    img: 'assets/portrait/chropfchroette_236.png',
    title: 'Rosi',
    quote: 'Mit gnue Suurstoff gahts immer!',
  },
];
