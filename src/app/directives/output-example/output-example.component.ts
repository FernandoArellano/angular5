import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-example',
  templateUrl: './output-example.component.html',
  styleUrls: ['./output-example.component.css']
})
export class OutputExampleComponent implements OnInit {

  votosAmerica: number;
  votosChivas: number;

  ganadorActual: string;

  constructor() {

  }

  ngOnInit() {
    this.votosAmerica = 0;
    this.votosChivas = 0;
  }

  sumarVoto(equipoVotado: string) {
    if(equipoVotado === 'America'){
      this.votosAmerica++;
    }
    else if(equipoVotado === 'Chivas'){
      this.votosChivas++;
    }
    (this.votosChivas > this.votosAmerica) ? this.ganadorActual= "Chivas" : this.ganadorActual = "America";
  }
}
