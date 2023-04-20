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
  ].sort(() => 0.5 - Math.random());
  secondarySponsors: Sponsor[] = [
    {
      name: 'Peterhans Handwerkercenter AG',
      url: 'https://www.peterhans-hwz.ch/',
      imgSrc: 'assets/sponsoren/PH_Logo_CMYK.jpg',
    },
    {
      name: 'Hächler AG',
      url: 'https://www.haechler.ch/',
      imgSrc: 'assets/sponsoren/Haechler.jpg',
    },
    {
      name: 'FUTURA Vorsorge',
      url: 'https://futura.ch/',
      imgSrc: 'assets/sponsoren/Logo_Futura_positiv_farbig.jpg',
    },
    {
      name: 'Verlag LANDxSTADT',
      url: 'https://www.landundstadt.ch/',
      imgSrc: 'assets/sponsoren/LxS_mit_Claim_rot.jpg',
    },
    {
      name: 'Schmocker + Sägesser AG',
      url: 'https://sundsag.ch/',
      imgSrc: 'assets/sponsoren/s_und_s.png',
    },
    {
      name: 'KARL BUBENHOFER AG',
      url: 'https://www.kabe-farben.ch/',
      imgSrc: 'assets/sponsoren/KABE_Logo_D_mit_Firmenname_RGB_2109.png',
    },
    {
      name: 'die Mobiliar',
      url: 'https://www.mobiliar.ch/',
      imgSrc: 'assets/sponsoren/MOB_d_RGB_rot.png',
    },
    {
      name: 'Raiffeisenbank Lägern-Baregg',
      url: 'https://www.raiffeisen.ch/laegern-baregg/de/ueber-uns/ihre-bank-vor-ort.html',
      imgSrc: 'assets/sponsoren/Raiffeisen_LB_ihreBank_Logo_300622.jpg',
    },
  ].sort(() => 0.5 - Math.random());
  goennerSponsors: Sponsor[] = [
    {
      name: 'Beck Alt',
      url: 'https://beckalt.ch/',
      imgSrc: 'assets/sponsoren/Beck_Alt.png',
    },
    {
      name: 'WRZ Holzbau GmbH',
      url: 'https://www.wrz-holzbau.ch/',
      imgSrc: 'assets/sponsoren/LogoHolzbau.JPG',
    },
    {
      name: 'WP Generalbau GmbH',
      url: 'https://www.wp-generalbau.ch/',
      imgSrc: 'assets/sponsoren/WP-Generalbau-Logo-RGB.png',
    },
    {
      name: 'Hayloft-IT GmbH',
      url: 'https://www.hayloft-it.ch/',
      imgSrc: 'assets/sponsoren/Hayloft.png',
    },
    {
      name: 'Holzhauer Pumpen Service AG',
      url: 'https://www.holzhauer-pumpen.de/',
      imgSrc: 'assets/sponsoren/Holzhauer-pumpen_Service AG.png',
    },
    {
      name: 'A. Staffelbach AG',
      url: 'https://www.a-staffelbach.ch/',
      imgSrc: 'assets/sponsoren/staffelbach.jpg',
    },
    {
      name: 'Kreisschule Rohrdorferberg',
      url: 'https://ksrb.ch/',
      imgSrc: 'assets/sponsoren/Kreisschule_Rohrdorferberg.png',
    },
    {
      name: 'LägereBräu AG',
      url: 'https://laegerebraeu.ch/',
      imgSrc: 'assets/sponsoren/LaegereBraeu.jpg',
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
  ].sort(() => 0.5 - Math.random());

  constructor() {}

  ngOnInit(): void {}
}

export interface Sponsor {
  name: string;
  description?: string;
  url: string;
  imgSrc: string;
}
