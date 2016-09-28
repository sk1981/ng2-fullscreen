import { Injectable, EventEmitter } from '@angular/core';

const docElement = document.documentElement;

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
  request: getFullScreenAPIComponent(docElement, fullScreenVendorAPI.request),
  cancel:  getFullScreenAPIComponent(docElement, fullScreenVendorAPI.request)
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
  constructor() {}
  public request(): string {
    return fullScreenService.request
  }

  public isSupported() {
    return fullScreenService.request !== undefined
  }
}