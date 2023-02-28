import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsoren',
  templateUrl: './sponsoren.component.html',
  styleUrls: ['./sponsoren.component.scss'],
})
export class SponsorenComponent implements OnInit {
  primarySponsors: Sponsor[] = [
    {
      name: 'Meier Schmocker AG',
      url: 'https://www.msag2020.ch/',
      imgSrc: 'assets/sponsoren/meier-schmocker-ag.jpeg',
    },
  ].sort((a, b) => 0.5 - Math.random());
  secondarySponsors: Sponsor[] = [
    {
      name: 'Hächler AG',
      url: 'https://www.haechler.ch/',
      imgSrc: 'assets/sponsoren/Haechler.jpg',
    },
    {
      name: 'Verlag LANDxSTADT',
      url: 'https://www.landundstadt.ch/',
      imgSrc: 'assets/sponsoren/LxS_mit_Claim_rot.jpg',
    },
    {
      name: 'Raiffeisenbank Lägern-Baregg',
      url: 'https://www.raiffeisen.ch/laegern-baregg/de/ueber-uns/ihre-bank-vor-ort.html',
      imgSrc: 'assets/sponsoren/Raiffeisen_LB_ihreBank_Logo_300622.jpg',
    },
  ].sort((a, b) => 0.5 - Math.random());
  goennerSponsors: Sponsor[] = [
    {
      name: 'Beck Alt',
      url: 'https://beckalt.ch/',
      imgSrc: 'assets/sponsoren/Beck_Alt.png',
    },
    {
      name: 'Kreisschule Rohrdorferberg',
      url: 'https://ksrb.ch/',
      imgSrc: 'assets/sponsoren/Kreisschule_Rohrdorferberg.png',
    },
    {
      name: 'LägereBräu AG',
      url: 'https://laegerebraeu.ch/',
      imgSrc: 'assets/sponsoren/LägereBräu.jpg',
    },
    {
      name: 'pro argovia',
      url: 'https://www.proargovia.ch/',
      imgSrc: 'assets/sponsoren/pa_logo_schwarz.jpg',
    },
    {
      name: 'Tägi AG',
      url: 'https://www.taegi.ch/',
      imgSrc: 'assets/sponsoren/Taegi_Logo_rgb_Zusatz.jpg',
    },
  ].sort((a, b) => 0.5 - Math.random());

  constructor() {}

  ngOnInit(): void {}
}

export interface Sponsor {
  name: string;
  description?: string;
  url: string;
  imgSrc: string;
}
