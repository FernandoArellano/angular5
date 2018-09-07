import { Component, OnInit } from '@angular/core';
import {JugadorModel} from "../../model/jugador.model";
import {BasicService} from "../../services/basicService";

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {

  jugador: JugadorModel;

  constructor(private basicService: BasicService) {

  }

  ngOnInit() {
    this.jugador = this.basicService.obtenerJugador();
  }

}
