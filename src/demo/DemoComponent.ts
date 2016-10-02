import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div [fullScreenTarget]="'.my-image'" fullscreen>FullScreen Element</div>
    <div fullscreen>another FullScreen Element</div>
    
    <div id="test" [(fullscreenIf)]="isFull">another FullScreen Element
      <button (click)="myChange($event)">Toggle FS</button>
    </div>
  `,
  styles : [
    `div {height: 100px; width:100px;}`
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class DemoComponent {
  @Input() isFull = false;
  @Output() isFullChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  myChange(event) {
    console.log("full---" + this.isFull);
    this.isFull = !this.isFull;
    this.isFullChange.emit(this.isFull);
  }

  ngOnChanges(changes: SimpleChanges) {
   console.log("triggered", changes);
  }
}