import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NdbxSharedModule } from './ndbx-shared.module';
import {
  
  UpgradeIe11Module
} from '@itmp/common/ui';
import { NavigationModule } from './components/navigation/navigation.module';
import { PfeIntegrationModule } from './pfe-integration.module';
import { RouterModule } from '@angular/router';
import { ItmpIntegrationModule } from './itmp-integration.module';
import { NdbxIconModule } from '@allianz/ngx-ndbx/icon';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
dayjs.extend(localeData);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
import 'dayjs/locale/en';
dayjs.locale('en');

@NgModule({
  declarations: [AppComponent],
  imports: [
    UpgradeIe11Module,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], { scrollPositionRestoration: 'top' }),
    NdbxSharedModule,
    NavigationModule,
    PfeIntegrationModule,
    ItmpIntegrationModule,
    
    NdbxIconModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: []
})
export class AppModule {}
