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
  
  constructor(private elRef: ElementRef, private fullScreenEventService: FullScreenEventService, private fullScreenService: FullScreenDOMService) {
    console.log("created directive");
  }

  ngOnInit() {
    this.fullScreenChangeListener =  this.fullScreenEventService.addListener((event) => {
      // console.log("isTarget ----", event.target === this.elRef.nativeElement);
    });
  }

  
  ngOnDestroy() {
    this.fullScreenEventService.removeListener(this.fullScreenChangeListener);
  }

  @HostListener('click') onClick() {
    let targetFullScreenElement;
    if(this.fullScreenTarget !== undefined && this.fullScreenTarget.trim().length >= 0) {
      this.fullScreenService.requestForSelector(this.fullScreenTarget);
    } else {
      // If no target specified use the current element
      this.fullScreenService.requestForElement(this.elRef);

    }
  }
}

