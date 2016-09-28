import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

const source = Observable.fromEvent(document, 'webkitfullscreenchange');
source.subscribe(x => console.log(x));


@Injectable()
export class FullScreenEventService {
  addListener(listener) {
    return source.subscribe(listener);
  }

  removeListener(listenerSubscription) {
    listenerSubscription.unsubscribe();
  }

}