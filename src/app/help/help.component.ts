import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data, HelpEvent } from './data';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  helpDates?: Map<Date, HelpEvent[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.helpDates = data.reduce(function (rv, x) {
      let key = new Date(x.date);
      let value: HelpEvent[] = rv.get(key) || [];
      value.push(x);
      rv.set(key, value);
      return rv;
    }, new Map<Date, HelpEvent[]>());
    console.log(data);
    let url = 'https://portal.helfereinsatz.ch/neoversum/de/getevents';
    this.http.get(url).subscribe(d => {
      console.log(data);
    });
  }
}
