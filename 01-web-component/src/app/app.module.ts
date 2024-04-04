import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';
import { EventBusService } from './event-bus.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HelloComponent],
  imports: [
    BrowserModule,
    CommonModule,
  ],
})
export class AppModule {
  constructor(injector: Injector, eventBus: EventBusService) {
    const helloElement = createCustomElement(HelloComponent, {injector});

    customElements.define('custom-hello', helloElement);

    eventBus.initialize();
  }

  ngDoBootstrap() {}
}
