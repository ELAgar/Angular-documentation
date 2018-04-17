import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {

  @Input('appBg') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.background') background: string;

  constructor(
    private HtmlElement: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.background = this.hoverColor;
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.background = this.defaultColor;
  }
}
