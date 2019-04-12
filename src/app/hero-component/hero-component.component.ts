import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hero-component',
  template: 
  `
  <div>{{hero.id}} {{hero.name}}</div>

  `,
  styleUrls: ['./hero-component.component.css']
})
export class HeroComponent implements OnInit {

  @Input()
  hero: any;

  constructor() { }

  ngOnInit() {
  }

}