import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBkImage]'
})
export class BkImageDirective {

  private el: HTMLElement;
  @Input('appBkImage') img = '';

  constructor( el: ElementRef) { 
    this.el = el.nativeElement;
  }
  
  ngAfterViewInit(): void {
    this.el.style.backgroundImage = 'url(' + this.img + ')';
  }
}
