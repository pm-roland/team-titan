import 'hammerjs';
import { enableProdMode } from '../node_modules/@angular/core';
import { platformBrowserDynamic } from '../node_modules/@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
