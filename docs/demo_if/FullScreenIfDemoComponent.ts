import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
    <h3>Full Screen If Component</h3>
    <p>Below component </p>
    <div [(fullscreenIf)]="isFull">another FullScreen Element
      <button (click)="myChange($event)">Toggle FS</button>
    </div>
  `,
  styles : [
    `div {height: 300px; width:300px;}`,
    `img {height: 100%; display: block; margin:auto}`,
    `.fullscreen {height: 100%; width: 100%}`
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class FullScreenIfDemoComponent {
  @Input() isFull = false;
  @Output() isFullChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  myChange(event) {
    this.isFull = !this.isFull;
    this.isFullChange.emit(this.isFull);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("triggered", changes);
  }
}

