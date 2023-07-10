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
      imgSrc: 'assets/sponsoren/min/meier-schmocker-ag.jpeg',
    },
  ].sort(() => 0.5 - Math.random());
  secondarySponsors: Sponsor[] = [
    {
      name: 'Peterhans Handwerkercenter AG',
      url: 'https://www.peterhans-hwz.ch/',
      imgSrc: 'assets/sponsoren/min/PH_Logo_CMYK.jpg',
    },
    {
      name: 'Hächler AG',
      url: 'https://www.haechler.ch/',
      imgSrc: 'assets/sponsoren/min/Haechler.jpg',
    },
    {
      name: 'FUTURA Vorsorge',
      url: 'https://futura.ch/',
      imgSrc: 'assets/sponsoren/min/Logo_Futura_positiv_farbig.jpg',
    },
    {
      name: 'Verlag LANDxSTADT',
      url: 'https://www.landundstadt.ch/',
      imgSrc: 'assets/sponsoren/min/LxS_mit_Claim_rot.jpg',
    },
    {
      name: 'Schmocker + Sägesser AG',
      url: 'https://sundsag.ch/',
      imgSrc: 'assets/sponsoren/min/s_und_s.png',
    },
    {
      name: 'KARL BUBENHOFER AG',
      url: 'https://www.kabe-farben.ch/',
      imgSrc: 'assets/sponsoren/min/KABE_Logo_D_mit_Firmenname_RGB_2109.png',
    },
    {
      name: 'die Mobiliar',
      url: 'https://www.mobiliar.ch/',
      imgSrc: 'assets/sponsoren/min/MOB_d_RGB_rot.png',
    },
    {
      name: 'Raiffeisenbank Lägern-Baregg',
      url: 'https://www.raiffeisen.ch/laegern-baregg/de/ueber-uns/ihre-bank-vor-ort.html',
      imgSrc: 'assets/sponsoren/min/Raiffeisen_LB_ihreBank_Logo_300622.jpg',
    },
    {
      name: 'Bächli & Partner AG',
      url: 'https://www.baechlipartner.ch/',
      imgSrc: 'assets/sponsoren/min/baechli.png',
    },
    {
      name: 'Huser Gebäudetechnik AG',
      url: 'https://huser-gt.ch/',
      imgSrc: 'assets/sponsoren/min/huser.jpg',
    },
    {
      name: 'WP Generalbau GmbH',
      url: 'https://www.wp-generalbau.ch/',
      imgSrc: 'assets/sponsoren/min/WP-Generalbau-Logo-RGB.png',
    },
    {
      name: 'A. Staffelbach AG',
      url: 'https://www.a-staffelbach.ch/',
      imgSrc: 'assets/sponsoren/min/staffelbach.jpg',
    },
    {
      name: 'TRAVELclub AG',
      url: 'https://travelclub.ch/',
      imgSrc: 'assets/sponsoren/min/travelclub.png',
    },
  ].sort(() => 0.5 - Math.random());
  goennerSponsors: Sponsor[] = [
    {
      name: 'Zürich Versicherungs-Gesellschaft AG | Generalagentur Vincenzo Centolanza',
      url: 'https://www.zurich.ch/de/standorte/generalagentur-vincenzo-centolanza-5036-oberentfelden',
      imgSrc:
        'assets/sponsoren/min/Zurich_Generalagentur_Vincenzo_Centolanza_Logo.png',
    },
    {
      name: 'Heimgartner Transport AG',
      url: 'https://heimgartner-transport.ch/',
      imgSrc: 'assets/sponsoren/min/HEIMGARTNER_Hauptlogo_2020_rgb.jpg',
    },
    {
      name: 'WeinStern Wettingen',
      url: 'https://www.weinstern-wettingen.ch/',
      imgSrc: 'assets/sponsoren/min/weinstern.jpeg',
    },
    {
      name: 'skylight planung klg',
      url: 'https://www.skylight-planung.ch/',
      imgSrc: 'assets/sponsoren/min/skylight.png',
    },
    {
      name: 'Spörri Veranstaltungstechnik GmbH',
      url: 'https://spoerri.swiss/',
      imgSrc: 'assets/sponsoren/min/Logo_Kompl_weiss_blau_rgb.jpg',
    },
    {
      name: 'Gelato Lepore GmbH',
      url: 'https://www.gelatolepore.ch/',
      imgSrc: 'assets/sponsoren/min/lepore.png',
    },
    {
      name: 'Eglin Elektro AG',
      url: 'https://www.eglin.ch/',
      imgSrc: 'assets/sponsoren/min/eglin.jpg',
    },
    {
      name: 'Beck Alt',
      url: 'https://beckalt.ch/',
      imgSrc: 'assets/sponsoren/min/Beck_Alt.png',
    },
    {
      name: 'WRZ Holzbau GmbH',
      url: 'https://www.wrz-holzbau.ch/',
      imgSrc: 'assets/sponsoren/min/LogoHolzbau.JPG',
    },
    {
      name: 'Hayloft-IT GmbH',
      url: 'https://www.hayloft-it.ch/',
      imgSrc: 'assets/sponsoren/min/Hayloft.png',
    },
    {
      name: 'Holzhauer Pumpen Service AG',
      url: 'https://www.holzhauer-pumpen.de/',
      imgSrc: 'assets/sponsoren/min/Holzhauer-pumpen_Service AG.png',
    },
    {
      name: 'Kreisschule Rohrdorferberg',
      url: 'https://ksrb.ch/',
      imgSrc: 'assets/sponsoren/min/Kreisschule_Rohrdorferberg.png',
    },
    {
      name: 'LägereBräu AG',
      url: 'https://laegerebraeu.ch/',
      imgSrc: 'assets/sponsoren/min/LaegereBraeu.jpg',
    },
    {
      name: 'pro argovia',
      url: 'https://www.proargovia.ch/',
      imgSrc: 'assets/sponsoren/min/pa_logo_schwarz.jpg',
    },
    {
      name: 'Tägi AG',
      url: 'https://www.taegi.ch/',
      imgSrc: 'assets/sponsoren/min/Taegi_Logo_rgb_Zusatz.jpg',
    },
    {
      name: 'Giger Böll Gerüstbau AG',
      url: 'https://www.gigerboell.ch/',
      imgSrc: 'assets/sponsoren/min/giger_boell.png',
    },
    {
      name: 'Schreinerei Marthaler AG\n',
      url: 'http://www.heinrich-marthaler.ch/',
      imgSrc: 'assets/sponsoren/min/martaler.png',
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
