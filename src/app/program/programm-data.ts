import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ProgramPoint {
  date: Date;
  title: string;
  description?: string;
  img?: string;
  bookingButton?: boolean;
  isTheatre?: boolean;
  icon?: IconDefinition;
  showTime?: boolean;
}

export let program: ProgramPoint[] = [
  {
    date: new Date(2023, 7, 19),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 20),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 21),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 22),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 23),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 24),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 25),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 26),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 27),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
  {
    date: new Date(2023, 7, 28),
    title: 'Theater Neoversum',
    description: 'Rocket lauch 11:00pm',
    bookingButton: true,
    img: 'assets/titelbild_1200px.png',
    isTheatre: true,
  },
];
