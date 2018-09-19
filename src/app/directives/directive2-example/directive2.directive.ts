import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  constructor(private el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'color', 'yellow');
  }

}
