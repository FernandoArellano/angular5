import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDir{

  constructor(private elementRef: ElementRef){
    this.elementRef.nativeElement, 'color', 'blue';
  }
}
