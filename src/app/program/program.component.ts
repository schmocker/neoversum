import { Component, OnInit } from '@angular/core';
import { faRocket, faStar } from '@fortawesome/free-solid-svg-icons';
import { program } from './programm-data';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  faRocket = faRocket;
  faStar = faStar;
  program = program.sort((a, b) => {
    return b.date > a.date ? -1 : 1;
  });

  constructor() {}

  ngOnInit(): void {}
}
