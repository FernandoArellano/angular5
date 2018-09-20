import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-example',
  templateUrl: './event-example.component.html',
  styleUrls: ['./event-example.component.css']
})
export class EventExampleComponent implements OnInit {

  values = '';
  values2 = '';
  values3 = '';
  emptyString = '';
  nombre: string = 'Fernando';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  onKey2(value: string) {
    this.values2 += value + ' | ';
  }

  onEnterFer(value: string) {
    console.log(value);
    this.values3 = value;
  }

  clearBox() {
    this.values3 = this.emptyString;
  }
}
