import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  dayControl = new FormControl()
  teamForm = new FormGroup({
    nombre: new FormControl(),
    edad: new FormControl(),
    numero: new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }
}
