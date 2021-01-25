import { ApplicationRef, enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PfeBusinessService, PfeNavigationService, PfeStateService } from '@allianz/ngx-pfe';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    window['ngItmpServices'] = {
      ngZone: ref.injector.get(NgZone),
      appRef: ref.injector.get(ApplicationRef),
      pfeStateService: ref.injector.get(PfeStateService),
      pfeBusinessService: ref.injector.get(PfeBusinessService),
      pfeNavigationService: ref.injector.get(PfeNavigationService)
    };
  })
  .catch((err) => console.error(err));
