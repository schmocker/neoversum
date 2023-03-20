import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ProgramPoint {
  date: Date;
  title: string;
  url?: string;
  description?: string;
  img?: string;
  bookingButton?: boolean;
  isTheatre?: boolean;
  icon?: IconDefinition;
  showTime?: boolean;
  showDate?: boolean;
}

let theaterDescription = '🥂 🍕 🍺 🎶 🎭 🚀';

let theaterProgram: ProgramPoint[] = [
  {
    date: new Date(2023, 7, 18, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 19, 22, 22),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 20, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 21, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 22, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 23, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 24, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 26, 22, 22),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
  {
    date: new Date(2023, 7, 27, 21, 21),
    title: 'Theater Neoversum',
    description: theaterDescription,
    bookingButton: true,
    isTheatre: true,
    showTime: true,
  },
];

export let program: ProgramPoint[] = [
  {
    date: new Date(2023, 7, 18, 23),
    title: 'Les Touristes',
    url: 'http://www.lestouristes.ch/',
    description:
      'Ein Pop-Quintett aus Basel machen Pop-Jazz-Abgehmukke mit Mundarttexten zwischen vulgär und dramatisch.',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 19, 14),
    title: 'Prof. Bummbastic',
    url: 'https://www.bummbastic.ch/',
    description: 'Interaktive Wissenschaftsshow für Kinder',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 19, 17, 30),
    title: 'Al Berto and the fried Bikinis',
    url: 'http://www.al-berto.ch/',
    description: 'Feels like instant holidays',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 20, 0, 30),
    title: 'DJ Seniorr',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 20),
    title: 'Wolpertinger',
  },
  {
    date: new Date(2023, 7, 20, 17),
    title: 'Poetry Slam',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 21, 19),
    title: 'Los Billtones',
    url: 'https://losbilltones.com/',
    description: 'Rocksteady, Early Reggae',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 22, 18, 30),
    title: 'literarischer Abend',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 23, 19),
    title: 'Bougainville',
    url: 'https://bougainville.ch/',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 24, 19),
    title: 'What Rules',
    description:
      'Die Band aus Baden, bei der niemand mehr stillsitzen kann. ' +
      'Lasst euch von der gewaltigen Stimme von Beri in ihren Bann ziehen.',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 24, 22, 30),
    title: 'Hi Jo',
    description:
      'Ein unvergessliches Duo, das mit einem abenteuerlichen Musikinstrument und ' +
      'unglaublicher Bühnenperformance noch lange in eurer Erinnerung bleiben wird.',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 25, 19),
    title: 'Beat Mustache',
    description:
      'Grossartige Musiker, inspiriert von Patent Ochsner, Open Season und Ska-P, ' +
      'die eine tolle Mischung auf die Bühne bringen und diese im charmantesten Berndeutsch rocken.',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 25, 22),
    title: 'Urban Pop',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 26, 0),
    title: 'DJ',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 26, 14),
    title: 'Bruno Hächler',
    url: 'https://www.brunohaechler.ch/',
    description: 'Kinderlieder und Geschichten',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 26, 18, 30),
    title: 'Lasla Guzzi',
    description: 'Wunderbarer Mundart Poetry Pop',
    showTime: true,
  },
  {
    date: new Date(2023, 7, 27, 0, 30),
    title: 'DJ Cussion',
    showTime: true,
  },
  ...theaterProgram,
];
