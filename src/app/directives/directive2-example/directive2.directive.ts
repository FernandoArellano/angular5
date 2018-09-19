import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  constructor(private el: ElementRef, private renderer: Renderer) {
   // renderer.setElementStyle(el.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseover') onMouseOver(){
    this.ChangeBgColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.ChangeBgColor('black')
  }

  @HostListener('click') onClick(){
    window.alert('Host Element Clicked');
  }

  ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
