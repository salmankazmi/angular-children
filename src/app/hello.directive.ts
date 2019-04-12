import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective implements OnInit  {
  constructor(private templateRef: TemplateRef<Object>, private vcr: ViewContainerRef) {}

  ngOnInit() {
    console.log('directive called');
    console.log(this.templateRef);
    console.log(this.vcr);
    this.vcr.createEmbeddedView(this.templateRef);
  }
}
