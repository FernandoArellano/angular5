import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/httpService";
import {FakeMessageModel} from "../../model/fakeMessage.model";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-observers-example',
  templateUrl: './observers-example.component.html',
  styleUrls: ['./observers-example.component.css']
})
export class ObserversExampleComponent implements OnInit {

  dataFromHttp: Array<FakeMessageModel> = new Array();
  behaviorSub: Subject<string> = new BehaviorSubject<string>(null);
  arreglo: Array<string> = new Array();

  constructor(private httpService: HttpService) {  }

  ngOnInit() {
    this.httpService.makeRequest().subscribe( data => {
      this.dataFromHttp = data;
    })
    this.behaviorSub.subscribe(data => {
      if(data) {
        console.log("data behavior: ", data);
        this.arreglo.push(data);
      }
    })
  }

  fillSubject(fakeMessage: FakeMessageModel){
    this.behaviorSub.next(fakeMessage.title);
  } 

}
