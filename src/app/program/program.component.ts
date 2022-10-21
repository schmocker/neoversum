import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  faRocket = faRocket;
  program: ProgramDay[] = [
    {
      date: new Date(2023, 7, 19),
      program: [
        {
          title: 'Pedestrians',
          img: 'assets/act_pedestrians.jpeg',
          description:
            'Am Freitag ab 20:00 Uhr verwöhnt uns Pedestrians mit Musik',
        },
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 20),
      program: [
        {
          title: 'Jass-Nachmittag',
          description: 'Zwischen 14 und 18 Uhr findet ein Jass-Turnier statt.',
        },
        {
          title: 'Pedestrians',
          description:
            'Am Freitag ab 20:00 Uhr verwöhnt uns Pedestrians mit Musik',
        },
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 21),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 22),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 23),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 24),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 25),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 26),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 27),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
    {
      date: new Date(2023, 7, 28),
      program: [
        {
          title: 'Theater Neoversum',
          description: 'Rocket lauch 11:00pm',
          bookingButton: true,
          img: 'assets/titelbild_1200px.png',
          isTheatre: true,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface ProgramPoint {
  title: string;
  description?: string;
  img?: string;
  bookingButton?: boolean;
  isTheatre?: boolean;
}

interface ProgramDay {
  date: Date;
  program?: ProgramPoint[];
}
