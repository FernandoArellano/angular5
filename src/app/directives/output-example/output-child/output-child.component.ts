import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output() voto: EventEmitter<string> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  votar(equipo: string){
    this.voto.emit(equipo);
  }

}
