import {Component, OnInit} from '@angular/core';
import {faRocket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  faRocket = faRocket;
  program: ProgramDay[] = [
    {
      date: new Date(2023, 7, 19),
      program: [{
        title: "Pedestrians",
        img: "assets/act_pedestrians.jpg",
        description: "Am Freitag ab 20:00 Uhr verwöhnt uns Pedestrians mit Musik"
      }, {title: "Theater Neoversum", description: "Rocket lauch 11:00pm", bookingButton: true}]
    },
    {
      date: new Date(2023, 7, 20),
      program: [{
        title: "Jass-Nachmittag",
        description: "Zwischen 14 und 18 Uhr findet ein Jass-Turnier statt."
      }, {
        title: "Pedestrians",
        description: "Am Freitag ab 20:00 Uhr verwöhnt uns Pedestrians mit Musik"
      }, {title: "Theater Neoversum", description: "Rocket lauch 11:00pm", bookingButton: true}]
    },
    {date: new Date(2023, 7, 21)},
    {date: new Date(2023, 7, 22)},
    {date: new Date(2023, 7, 23)},
    {date: new Date(2023, 7, 24)},
    {date: new Date(2023, 7, 25)},
    {date: new Date(2023, 7, 26)},
    {date: new Date(2023, 7, 27)},
    {date: new Date(2023, 7, 28)},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface ProgramPoint {
  title: string,
  description?: string
  img?: string
  bookingButton?: boolean
}

interface ProgramDay {
  date: Date,
  program?: ProgramPoint[]
}
