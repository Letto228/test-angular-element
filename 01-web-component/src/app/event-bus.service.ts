import { Injectable, NgZone, inject } from '@angular/core';
import { Subject } from 'rxjs';
import api from '../../api';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private readonly eventStore$ = new Subject<{test: string}>();
  readonly event$ = this.eventStore$.asObservable();

  initialize() {
    console.log('initialize');

    api.dispatchEvent = (event) => {
      this.ngZone.run(() => {
        this.sendEvent(event as {test: string});
      })
    }

    this.event$.subscribe(event => {
      console.log('Event in MF: ', event);
    })
  }

  sendEvent(event: {test: string}) {
    this.eventStore$.next(event);
  }

  private readonly ngZone = inject(NgZone);
}
