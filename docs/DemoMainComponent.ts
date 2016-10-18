import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
    <nav>
       <h3>Angular 2 Full Screen Demo</h3>
    </nav>
    <router-outlet></router-outlet> 
  `,
  styles : [
   
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class DemoMainComponent {

}