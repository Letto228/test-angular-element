import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import apiObject from '../api';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export const api = apiObject;
