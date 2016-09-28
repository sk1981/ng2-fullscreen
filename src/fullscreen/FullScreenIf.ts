import {Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core'
import { FullScreenDOMService } from './FullScreenDOMService'
import { FullScreenEventService } from './FullScreenEventService'

@Directive({
  selector: '[fullscreen-if]',
  providers:[FullScreenDOMService, FullScreenEventService]
})
export class FullScreenIf {
  @Input() fullScreenIf: boolean;
  // @Output() fullScreenIfChange = function() {
  //   console.log("test");
  // };

  constructor(private _el: ElementRef, private fullScreenService: FullScreenDOMService) {
    console.log("created directive if");
    console.log("------", this.fullScreenIf);
  }



}

