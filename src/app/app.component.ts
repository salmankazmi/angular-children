import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
//import { HeroComponent } from './hero-component/hero-component.component';

export class Hero {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: 'my-app',
  template:
    `
  <app-hero-component #myHeroes *ngFor="let hero of heroes" [hero]="hero"></app-hero-component>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChildren('myHeroes')
  myHeroes: QueryList<Hero>;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.myHeroes);
  }

  heroes: Array<Hero> = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
}
