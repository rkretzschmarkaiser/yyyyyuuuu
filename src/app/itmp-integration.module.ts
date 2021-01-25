import { NgModule } from '@angular/core';
import {
  BFF_BASE_URL_TOKEN,
  PAGES_CONFIGURATION
} from '@itmp/itmp-core';

import { environment } from '../environments/environment';
import POLICY from '!raw-loader!../config/policy.txt';
import { ACL_POLICY_CONTENT_TOKEN, AclModule } from '@itmp/acl/angular';

import pagesConfig from '../config/pages.json';

@NgModule({
  imports: [],
  exports: [AclModule],
  declarations: [],
  providers: [
    { provide: BFF_BASE_URL_TOKEN, useValue: environment.BFF_BASE_URL },
    {
      provide: ACL_POLICY_CONTENT_TOKEN,
      useValue: POLICY
    },
    {
      provide: PAGES_CONFIGURATION,
      useValue: pagesConfig
    }
  ]
})
export class ItmpIntegrationModule {}
