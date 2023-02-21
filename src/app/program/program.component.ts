import { Component, OnInit } from '@angular/core';
import {
  faMasksTheater,
  faRocket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { program, ProgramPoint } from './programm-data';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  faRocket = faRocket;
  faStar = faStar;
  faMasksTheater = faMasksTheater;
  program: ProgramPoint[];
  today = new Date();

  constructor() {
    this.program = program
      .sort((a, b) => {
        let datimeB = b.showTime
          ? b.date
          : new Date(
              b.date.getFullYear(),
              b.date.getMonth(),
              b.date.getDate() + 1
            );
        let datimeA = a.showTime
          ? a.date
          : new Date(
              a.date.getFullYear(),
              a.date.getMonth(),
              a.date.getDate() + 1
            );

        return datimeB > datimeA ? -1 : 1;
      })
      .map((pp, i) => {
        pp.showDate =
          (program[i - 1]?.date?.getDate() != pp.date.getDate() &&
            pp.date.getHours() > 5) ||
          (program[i - 1]?.date?.getHours() || 0) < 5;
        return pp;
      });
  }

  ngOnInit(): void {}
}
