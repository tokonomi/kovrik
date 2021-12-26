import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('mouseenter') onHover(){
    this.r.addClass(this.el.nativeElement, 'active')
  }
  @HostListener('mouseleave') onLeave(){
    this.r.removeClass(this.el.nativeElement, 'active')
  }
}
