import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erinnerungen',
  templateUrl: './erinnerungen.component.html',
  styleUrls: ['./erinnerungen.component.scss'],
})
export class ErinnerungenComponent implements OnInit {
  photosBF2017: string[] = [
    '2017_01_ChrChr.png',
    '2017_01_Terrassino.jpg',
    '2017_02_ChrChr.jpg',
    '2017_02_Terrassino.jpg',
    '2017_03_ChrChr.webp',
    '2017_03_Terrassino.jpg',
    '2017_04_ChrChr.JPG',
    '2017_04_Terrassino.JPG',
    '2017_05_ChrChr.JPG',
    '2017_05_Terrassino.JPG',
    '2017_06_ChrChr.JPG',
    '2017_06_Terrassino.jpg',
    '2017_07_ChrChr.JPG',
    '2017_07_Terrassino.jpg',
    '2017_08_ChrChr.jpg',
    '2017_09_ChrChr.JPG',
    '2017_10_ChrChr.JPG',
    '2017_11_ChrChr.JPG',
  ].map(f => 'assets/photosBF2017/' + f);

  photosBF2012ChrChr: string[] = [
    '2012_02_ChrChr.png',
    '2012_01_ChrChr.png',
  ].map(f => 'assets/photosBF2012/' + f);

  photosBF2012Terrassion: string[] = [
    '2012_01_Terrassino.jpg',
    '2012_02_Terrassino.jpg',
    '2012_05_Terrassino.jpg',
    '2012_06_Terrassino.jpg',
    '2012_09_Terrassino.jpg',
    '2012_10_Terrassino.jpg',
    '2012_08_Terrassino.jpg',
    '2012_07_Terrassino.jpg',
    '2012_04_Terrassino.jpg',
    '2012_03_Terrassino.jpg',
  ].map(f => 'assets/photosBF2012/' + f);

  constructor() {}

  ngOnInit(): void {}
}
