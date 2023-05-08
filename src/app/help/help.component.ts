import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(data);
    let url = 'https://portal.helfereinsatz.ch/neoversum/de/getevents';
    this.http.get(url).subscribe(d => {
      console.log(data);
    });
  }
}
