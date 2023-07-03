import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['./aktuelles.component.scss'],
})
export class AktuellesComponent implements OnInit {
  faRocket = faRocket;

  constructor() {}

  ngOnInit(): void {}
}
