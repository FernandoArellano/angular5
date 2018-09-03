import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  arreglo: Array<string> = new Array();

  constructor() {
    this.arreglo.push('Azul');
    this.arreglo.push('Morado');
    this.arreglo.push('Verde');
    this.arreglo.push('Amarillo');
    this.arreglo.push('Gris');
    console.log(this.arreglo);
  }

  ngOnInit() {
  }

  agregarColor(color: HTMLInputElement){
    this.arreglo.push(color.value);
  }

  clearArray(){
    this.arreglo = new Array();
  }
}
