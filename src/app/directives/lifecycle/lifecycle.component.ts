import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  bandera: boolean = false;

  @Input() cambios: string ="Fer";

  ngOnInit() {
    console.log('Entro a ngOninit');
    this.cambios = 'Adriana';

  }

  ngOnChanges(changes : SimpleChanges) {
    console.log(`OnChanges ${changes.prop}` )
  }

  ngDoCheck(){
    console.log('Entro a ngDoCheck')
  }

  ngOnDestroy(){
    console.log('Entro a ngOnDestroy')
  }

  toogle(){
    this.bandera = !this.bandera;
  }

}
