import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective implements OnInit  {
  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) {}

  @Input() helloOf: Array<number>

  ngOnInit() {
    console.log('directive called');
    console.log(this.helloOf);
    //console.log(this.templateRef);
    //console.log(this.vcr);
    for(const number of this.helloOf) {
      this.vcr.createEmbeddedView(this.templateRef, {$implicit: number});
    }
  }
}
