import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
    <h3>Full Screen Target Component</h3>
    <p>We can toggle the element based on another element</p>
    <p>All we need to do is apply the directive [fullScreenTarget] to any element and pass to it a selector of the element which need to be in fullscreen</p>
    <p>Below click the button to toggle the image</p>
    <button [fullScreenTarget]="'.my-image'" fullscreen>FullScreen Element</button>
    <img class="my-image" src="./resources/image.jpg"/>
  `,
  styles : [
    `div {height: 300px; width:300px;}`,
    `img {height: 100px; display: block; margin:auto}`,
    `.fullscreen {height: 100%; width: 100%}`
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class FullScreenTargetDemoComponent {
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

