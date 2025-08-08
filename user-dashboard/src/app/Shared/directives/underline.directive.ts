import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true
})
export class UnderlineDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }
}
