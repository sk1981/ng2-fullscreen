import {Directive, ElementRef, Renderer, HostListener, Input, OnInit, OnDestroy} from '@angular/core'
import { FullScreenDOMService } from './FullScreenDOMService'
import { FullScreenEventService } from './FullScreenEventService'

@Directive({
  selector: '[fullscreen]',
  providers:[FullScreenDOMService, FullScreenEventService]
})
export class FullScreen {
  @Input() fullScreenTarget: string;
  private fullScreenChangeListener;
  
  constructor(private _el: ElementRef, private fullScreenEventService: FullScreenEventService, private fullScreenService: FullScreenDOMService) {
    console.log("created directive");
  }

  ngOnInit() {
    this.fullScreenChangeListener =  this.fullScreenEventService.addListener((event) => {
      console.log("isTarget ----", event.target === this._el.nativeElement);
    });
  }

  ngOnDestroy() {
    this.fullScreenEventService.removeListener(this.fullScreenChangeListener);
  }

  @HostListener('click') onClick() {
    const requestString = this.fullScreenService.request();
    let targetFullScreenElement;
    if(this.fullScreenTarget !== undefined && this.fullScreenTarget.trim().length >= 0) {
      const fullScreenTargetArr = document.querySelectorAll(this.fullScreenTarget);
      //TODO : Check vailidity and thow exception
      targetFullScreenElement = fullScreenTargetArr[0];
    } else {
      // If no target specified use the current element
      targetFullScreenElement = this._el.nativeElement;
    }
    targetFullScreenElement[requestString]();
  }
}

