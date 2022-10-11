import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faRocket = faRocket;
  showNavigationIndicators = true;
  showNavigationArrows = true;
  slides: slide[];

  constructor() {
    this.slides = this.shuffleArray(slides);
  }

  ngOnInit(): void {}

  shuffleArray(array: slide[]): slide[] {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
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
    title: 'Chrotte Grotte',
    quote:
      'Ufem Planet Chrotte Grotte het ganz e huufe Fröschli. Chlini, grossi, schöni ond wüeschti.',
  },
  {
    img: 'assets/portrait/chropfchroette_035.png',
    title: 'Esotherikerin',
    quote: "hauptsach s'Pendel schwingt",
  },
  {
    img: 'assets/portrait/chropfchroette_071.png',
    title: 'El Capitano',
    quote:
      "Sicherheit und Kontrolle, mini Dame ond Herre, das esch s'Wechtigscht!",
  },
];
