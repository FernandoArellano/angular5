import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-output-example',
  templateUrl: './output-example.component.html',
  styleUrls: ['./output-example.component.css']
})
export class OutputExampleComponent implements OnInit, OnChanges {

  votosAmerica: number;
  votosChivas: number;

  ganadorActual: string;
  resaltar: boolean = true;

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
    if(this.ganadorActual === 'America'){
    this.resaltar = true;
    }
    else{
      this.resaltar = false;
    }
}
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
