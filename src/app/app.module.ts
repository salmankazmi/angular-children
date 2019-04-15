import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloDirective } from './hello.directive';
import { HeroComponent } from './hero-component/hero-component.component';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloDirective, HeroComponent, MyCompComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
