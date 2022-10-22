import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsoren',
  templateUrl: './sponsoren.component.html',
  styleUrls: ['./sponsoren.component.scss'],
})
export class SponsorenComponent implements OnInit {
  allSponsors: Sponsor[] = [
    {
      name: 'A. Staffelbach AG',
      url: 'https://www.a-staffelbach.ch/',
      imgSrc: 'assets/sponsoren/a-staffelbach-ag.webp',
      mainSponsor: true,
    },
    {
      name: 'Meier Schmocker AG',
      url: 'https://www.msag2020.ch/',
      imgSrc: 'assets/sponsoren/meier-schmocker-ag.jpeg',
      mainSponsor: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  get primarySponsors(): Sponsor[] {
    return this.allSponsors.filter(s => s.mainSponsor);
  }

  get secondarySponsors(): Sponsor[] {
    return this.allSponsors.filter(s => !s.mainSponsor);
  }
}

interface Sponsor {
  name: string;
  description?: string;
  url: string;
  imgSrc: string;
  mainSponsor?: boolean;
}
