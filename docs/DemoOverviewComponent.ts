import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
    <p>Click below links to go to the demo pages directly</p>
    <ul>
      <li><a routerLink="/basic" >Basic Demo</a></li>
      <li><a routerLink="/ifdemo" >Using If Condition</a></li>
      <li><a routerLink="/targetdemo" >Full Screen based on another Target</a></li>
    </ul>
  `,
  styles : [
   
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class DemoOverviewComponent {

}