import { Directive, HostListener, ElementRef, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  @Input('appHoverColor') appHoverColor!: string;

  constructor(@Optional() private control:NgControl, private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const overColor =  this.appHoverColor || 'yellow';
    this.highlight(overColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(overColor: string) {
      this.el.nativeElement.style.backgroundColor = overColor;
  }
}
