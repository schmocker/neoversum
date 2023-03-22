import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  faAngleDown = faAngleDown;

  constructor() {}

  ngOnInit(): void {}

  scrollToContent(): void {
    scroll();
    window.scrollTo(0, 200);
  }

  scroll(el: NavbarComponent) {
    el.navbar.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
