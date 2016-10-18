import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
    <h3>Basic Full Screen Component</h3>
    <p>We can make an element fullscreen on clicking it</p>
    <p>All we need to do is apply the directive fullscreen directive to it</p>
    <div fullscreen>
      <img src="./resources/image.jpg"/>
    </div>  `,
  styles : [
    `div {height: 300px; width:300px;}`,
    `img {height: 100%; display: block; margin:auto}`,
    `.fullscreen {height: 100%; width: 100%}`
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class BasicComponent {
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