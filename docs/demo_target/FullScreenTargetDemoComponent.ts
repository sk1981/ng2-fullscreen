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
    <h2>Example Code</h2>
    <div>Below is example of template using the fullscreenTarget direction. Note that the fullscreenTarget is a css selector which points towards the image</div>
    <pre><code class="language-javascript"> 
&lt;button [fullScreenTarget]=&quot;'.my-image'&quot; fullscreen&gt;FullScreen Element&lt;/button&gt;
&lt;img class=&quot;my-image&quot; src=&quot;./resources/image.jpg&quot;/&gt;
    </code></pre>    
  `,
  styles : [
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

