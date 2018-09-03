import {Component, Input, OnInit} from '@angular/core';
import {Jugador} from "./jugador.model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() jugadores: Jugador[];

  constructor() { }

  ngOnInit() {
  }

}
