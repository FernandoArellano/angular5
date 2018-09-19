import {Directive, ElementRef, HostBinding, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appDirective2]'
})
export class Directive2Directive {

  constructor(private el: ElementRef, private renderer: Renderer) {
   // renderer.setElementStyle(el.nativeElement, 'color', 'yellow');
  }

  @HostBinding('style.border') border: string;

  @HostListener('mouseover') onMouseOver(){
    this.border = '5px solid green';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.border = 'none';
  }

  @HostListener('click') onClick(){
    window.alert('Host Element Clicked');
  }

  ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
