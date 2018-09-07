import { Injectable } from "@angular/core";
import {JugadorModel} from "../model/jugador.model";

@Injectable()
export class BasicService{

obtenerJugador(){
  return new JugadorModel('Fernando', 32, 10);
}
}
