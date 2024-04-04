import { Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from '@angular/core';
import { EventBusService } from '../event-bus.service';
import { map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  // @Input() name: string = '';
  @Output() clicked = new EventEmitter<string>();

  readonly name$ = inject(EventBusService).event$.pipe(map(({test}: {test: string}) => test), tap(console.log));
}
