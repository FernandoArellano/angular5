import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  arreglo: Array<string> = new Array();
  parametro: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.arreglo.push('Azul');
    this.arreglo.push('Morado');
    this.arreglo.push('Verde');
    this.arreglo.push('Amarillo');
    this.arreglo.push('Gris');
    console.log(this.arreglo);
    route.params.subscribe(params => {this.parametro = params['param'];})
  }

  ngOnInit() {
    console.log("Param recibido: ", this.parametro )
  }

  agregarColor(color: HTMLInputElement){
    this.arreglo.push(color.value);
  }

  clearArray(){
    this.arreglo = new Array();
  }
}
