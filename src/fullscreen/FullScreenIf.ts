import {
  Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter, SimpleChanges,
  OnChanges
} from '@angular/core'
import { FullScreenDOMService } from './FullScreenDOMService'
import { FullScreenEventService } from './FullScreenEventService'

@Directive({
  selector: '[fullscreenIf]',
  providers:[FullScreenDOMService, FullScreenEventService]
})
export class FullScreenIf implements OnChanges, OnDestroy {
  /**
   * Internal variable to manage state and check if the current element is in full screen mode or not
   * @type {boolean}
   */
  private isFullScreen = false;
  @Input('fullscreenIf') fullscreenIf: boolean = this.isFullScreen;
  @Output('fullscreenIfChange') fullscreenIfChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  private fullScreenChangeListener;

  constructor(private elRef: ElementRef, private fullScreenService: FullScreenDOMService, private fullScreenEventService: FullScreenEventService) {
  }

  ngOnInit() {
    this.fullScreenChangeListener = this.fullScreenEventService.addListener((event) => {
      if(event.target === this.elRef.nativeElement) {
        this.isFullScreen = !this.isFullScreen;
        this.fullscreenIfChange .emit(this.isFullScreen);
        this.fullScreenService.handleFullScreenChange(this.elRef.nativeElement, this.isFullScreen);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const value = changes['fullscreenIf'].currentValue;
    if(value) {
      this.fullScreenService.request(this.elRef.nativeElement);
    } else {
      this.fullScreenService.cancel();
    }
  }

  ngOnDestroy() {
    this.fullScreenEventService.removeListener(this.fullScreenChangeListener);
  }
}
