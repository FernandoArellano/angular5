import { Component, OnInit } from '@angular/core';
import {Colores} from "./enumerations";

@Component({
  selector: 'app-enumerations',
  templateUrl: './enumerations.component.html',
  styleUrls: ['./enumerations.component.css']
})
export class EnumerationsComponent implements OnInit {

  colores: Array<Colores> = new Array();
  favorito: string = "";

  constructor() {
    this.colores.push(Colores.NEGRO);
    this.colores.push(Colores.AMARILLO);
    this.colores.push(Colores.VERDE);
    this.colores.push(Colores.MORADO);
  }

  ngOnInit() {

  }

  validarColor(color: Colores) {
    (color === Colores.NEGRO) ? this.favorito = `SI ${color} es mi color favorito` : this.favorito = `NO es ${color} mi color favorito `;
  }

}
