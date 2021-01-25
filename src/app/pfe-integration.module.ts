import { Injectable, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  AppConfiguration,
  NGX_PFE_CONFIGURATION,
  NgxPfeConfig,
  NgxPfeModule,
  NgxPfeModuleConfiguration,
  PageConfig,
  PfeConfigurationService,
  PfeUtilService
} from '@allianz/ngx-pfe';
import { pages } from './pages-mapping';
import { environment } from '../environments/environment';
import pfeConfig from '../config/pfe.json';
import { PfeDevToolsModule } from '@allianz/ngx-pfe/pfe-dev-tools';
import { PfeNdbxMasterPageModule } from '@allianz/ngx-pfe/ndbx';

export function ngxPFEConfigFactory() {
  const defaultTenant = 'bb-pfe';
  const applicationID = 'gdf_app';

  const config: NgxPfeModuleConfiguration = {
    pageMapping: pages,
    tenant: defaultTenant,
    applicationID,
    config_api_endpoint: 'http://localhost:8080/config',
    service_activator_endpoint: environment.BFF_BASE_URL,
    production: environment.production
  };

  if (environment.production) {
    config.tracking = {
      adobeUrl: environment.TRACKING_ADOBE_URL,
      appName: environment.TRACKING_APP_NAME
    };
  }

  return config;
}

class FakeTransportLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of([]);
  }
}

export function HttpLoaderFactory(
  http: HttpClient,
  pfeConfigService: PfeConfigurationService<AppConfiguration>,
  pfeUtilService: PfeUtilService
) {
  return new FakeTransportLoader();
}

@Injectable()
export class MyCustomConfigService extends PfeConfigurationService {
  getConfig(): Promise<NgxPfeConfig<AppConfiguration, PageConfig>> {
    this.addReferencedPageConfigs(pfeConfig as any);
    return new Promise((resolve, reject) => {
      resolve(pfeConfig as any);
    });
  }
}

@NgModule({
  imports: [
    NgxPfeModule.forRoot({
      provide: NGX_PFE_CONFIGURATION,
      useFactory: ngxPFEConfigFactory
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, PfeConfigurationService, PfeUtilService]
      }
    })
  ],
  exports: [PfeDevToolsModule, PfeNdbxMasterPageModule],
  declarations: [],
  providers: [{ provide: PfeConfigurationService, useClass: MyCustomConfigService }]
})
export class PfeIntegrationModule {}
