import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
  <div *hello="let num of numbers">
    {{num}}
  </div>
  `,
  styles: []
})
export class MyCompComponent implements OnInit {

  constructor() { }

  numbers: Array<number> = [1,2,3,4,5];

  ngOnInit() {
  }

}