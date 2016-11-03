import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'basic-app',
  template: `
    <h3>Full Screen Target Component</h3>
    <p>We can toggle the element based on another variable</p>
    <p>
      All we need to do is apply the directive [fullscreenIf]="&lt;variable&gt;" && (fullscreenIfChange)="&lt;variable&gt;=$event" 
      to any variable on whose value we want the full screen element
    </p>
    <div class="main" [fullscreenIf]="screen.isFull" (fullscreenIfChange)="screen.isFull=$event">
        <input type="radio" [(ngModel)]="screen.isFull" [value]="true" name="toggle" /> Yes
        <input type="radio" [(ngModel)]="screen.isFull" [value]="false" name="toggle" /> No
        <input type="button" (click)="screen.isFull=!screen.isFull" value="toggle"/>
    </div>
    <h2>Example Code</h2>
    <div>Below is example template which can be used. Here screen.isFull is variable present on the component.</div>
    <pre><code class="language-javascript">
      &lt;div [fullscreenIf]=&quot;screen.isFull&quot; (fullscreenIfChange)=&quot;screen.isFull=$event&quot;&gt;
          &lt;input type=&quot;radio&quot; [(ngModel)]=&quot;screen.isFull&quot; [value]=&quot;true&quot; name=&quot;toggle&quot; /&gt; Yes
          &lt;input type=&quot;radio&quot; [(ngModel)]=&quot;screen.isFull&quot; [value]=&quot;false&quot; name=&quot;toggle&quot; /&gt; No
          &lt;input type=&quot;button&quot; (click)=&quot;screen.isFull=!screen.isFull&quot; value=&quot;toggle&quot;/&gt;
      &lt;/div&gt;          
    </code></pre>  
  `,
  styles : [
    `div.main {width:300px;}`,
    `img {height: 100%; display: block; margin:auto}`,
    `div.main.fullscreen {height: 100%; width: 100%}`
  ]
})
export class FullScreenIfDemoComponent {
  @Input('screen') screen = {
    isFull: false
  };


  @Input('exampleHTML') exampleHTML = `
      <div [fullscreenIf]="screen.isFull" (fullscreenIfChange)="screen.isFull=$event">\n      
          <input type="radio" [(ngModel)]="screen.isFull" [value]="true" name="toggle" /> Yes
          <input type="radio" [(ngModel)]="screen.isFull" [value]="false" name="toggle" /> No
          <input type="button" (click)="screen.isFull=!screen.isFull" value="toggle"/>
      </div> 
`;
}

