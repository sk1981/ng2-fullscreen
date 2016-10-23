import {Injectable, ElementRef, Renderer} from '@angular/core';

/**
 *
 * @param document
 * @param apiComponentArray
 * @returns {any}
 */
function getFullScreenAPIComponent(document, apiComponentArray) {
  let finalAPIComponent;
  apiComponentArray.forEach((apiComponent) => {
    if(document[apiComponent]) {
      finalAPIComponent = apiComponent;
    }
  });
  return finalAPIComponent;
}

const fullScreenVendorAPI = {
  request: ['requestFullScreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
  cancel : ['cancelFullScreen', 'exitFullscreen', 'mozCancelFullScreen', 'webkitExitFullscreen', 'msExitFullscreen'],
  event: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'MSFullscreenChange']
};



var fullScreenService = {
  request: getFullScreenAPIComponent(document.documentElement, fullScreenVendorAPI.request),
  cancel:  getFullScreenAPIComponent(document, fullScreenVendorAPI.cancel)
};



/**
 * Add event here :
 * TODO : figure out what would be the best way to do one time setup
 */

/**
 *
 */
@Injectable()
export class FullScreenDOMService {
  constructor(private renderer: Renderer) {}
  public request(nativeElement): string {
    return nativeElement[fullScreenService.request]();
  }

  public getElementBySelector(selectorString) {
    const fullScreenTargetArr = document.querySelectorAll(selectorString);
    return fullScreenTargetArr[0];
  }

  public cancel(): string {
    return document[fullScreenService.cancel]();
  }

  public isSupported() {
    return fullScreenService.request !== undefined
  }

  handleFullScreenChange(nativeElement, isFullScreen:boolean) {
    this.renderer.setElementClass(nativeElement, 'fullscreen', isFullScreen);
  }
}