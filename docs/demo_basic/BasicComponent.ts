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
    <div class="main" fullscreen>
      <img src="./resources/image.jpg"/>
    </div>
    <h2>Example Code</h2>
    <div>Below is example of template using the fullscreen directive. Clicking the template makes the element along with it's children fullscreen</div>
    <pre><code class="language-javascript"> 
&lt;div fullscreen&gt;
&lt;img src=&quot;./resources/image.jpg&quot;/&gt;
&lt;/div&gt;
    </code></pre>
      `,
  styles : [
    `.main {height: 300px; width:300px;}`,
    `img {height: 100%; display: block; margin:auto}`,
    `.fullscreen {height: 100%; width: 100%}`
  ],
  changeDetection: ChangeDetectionStrategy.Default  ,
})
export class BasicComponent {
  @Input() isFull = false;
  @Output() isFullChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
   console.log("triggered", changes);
  }
}