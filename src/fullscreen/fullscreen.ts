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
  private isFullScreen = false;
  private nativeElement;
  
  constructor(private elRef: ElementRef, private fullScreenEventService: FullScreenEventService, private fullScreenService: FullScreenDOMService) {
  }

  ngOnInit() {
    this.nativeElement =  this.fullScreenTarget !== undefined? this.fullScreenService.getElementBySelector(this.fullScreenTarget): this.elRef.nativeElement;
    this.fullScreenChangeListener = this.fullScreenEventService.addListener((event) => {
      if(event.target === this.nativeElement) {
        this.isFullScreen = !this.isFullScreen;
        this.fullScreenService.handleFullScreenChange(this.nativeElement, this.isFullScreen);
      }
    });
  }

  ngOnDestroy() {
    this.fullScreenEventService.removeListener(this.fullScreenChangeListener);
  }

  @HostListener('click') onClick() {
      this.fullScreenService.request(this.nativeElement);
  }
 }

