import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FakeMessageModel} from "../model/fakeMessage.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService{

  data: Array<FakeMessageModel> = new Array();

  constructor(private http: HttpClient){

  }

  makeRequest(): Observable<Array<FakeMessageModel>> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
