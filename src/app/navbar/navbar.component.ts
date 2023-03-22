import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar', { read: ElementRef }) navbar!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  scroll() {
    this.navbar.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
