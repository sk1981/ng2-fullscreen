import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div [fullScreenTarget]="'.my-image'" fullscreen>FullScreen Element</div>
    <div fullscreen>another FullScreen Element</div>
    <button (click)="myChange($event)">Toggle FS</button>
    <div fullscreen-if="isFull">another FullScreen Element</div>
  `,
  styles : [
    `div {height: 100px; width:100px;}`
  ]
})
export class DemoComponent {
  @Input() isFull = false;
  @Output() isFullChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  myChange(event) {
    console.log(this.isFull);
    this.isFull = !this.isFull;
    this.isFullChange.emit(this.isFull);
  }
}