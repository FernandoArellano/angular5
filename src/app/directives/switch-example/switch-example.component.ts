import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.css']
})
export class SwitchExampleComponent implements OnInit {

  dia:string;

  constructor() { }

  ngOnInit() {
    this.dia ="domingo";
  }

}
