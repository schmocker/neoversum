import { Component, Input, OnInit } from '@angular/core';
import { Sponsor } from '../sponsoren.component';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
})
export class SponsorCardComponent implements OnInit {
  @Input() sponsor!: Sponsor;

  constructor() {}

  ngOnInit(): void {}
}
