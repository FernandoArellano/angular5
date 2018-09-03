import { Component, OnInit } from '@angular/core';
import {Jugador} from "../child/jugador.model";

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {

  dummyJugadores: Jugador[] = new Array();
  mostrarFormaParaAlta: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  //recibe las temp values como HtmlInput Element
  agregarJugador(nombre: HTMLInputElement, edad: HTMLInputElement, numero: HTMLInputElement) {
    //parsea el valor de string a entero
    this.dummyJugadores.push(new Jugador(nombre.value, parseInt(edad.value) , parseInt(numero.value)));
    console.log(`Jugador agregado: ${nombre.value}`)
  }

  toogleForm(){
    this.mostrarFormaParaAlta = !this.mostrarFormaParaAlta;
  }
}
