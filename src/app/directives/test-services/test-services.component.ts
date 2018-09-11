import { Component, OnInit } from '@angular/core';
import {JugadorModel} from "../../model/jugador.model";
import {BasicService} from "../../services/basicService";
import {HttpService} from "../../services/httpService";
import {FakeMessageModel} from "../../model/fakeMessage.model";

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {

  jugador: JugadorModel;
  data: Array<FakeMessageModel> = new Array();
  dataCount: number;

  constructor(private basicService: BasicService, private httpService: HttpService) {

  }

  ngOnInit() {
    this.jugador = this.basicService.obtenerJugador();

    this.httpService.makeRequest().subscribe(data => {
      this.data = data;
      console.log("Component data: " , this.data);
      this.dataCount = this.data.length;
    })
  }

}
