import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MyPageAComponent } from './my-page-a.component';
import {
  BUILDING_BLOCK_META_DATA,
  BuildingBlockDebuggerModule
} from '@itmp/itmp-core';


import { PlaceholderModule } from '@itmp/building-blocks';


import { getDataForPage } from '@itmp/itmp-core';

import PAGES_DATA from '../../../config/pages.json';
import { SummaryPanelModule } from '@itmp/common/ui';
const PAGE_ID = 'my-page-a';

const EXTRACTED_PAGE_META_DATA = getDataForPage(
  PAGES_DATA.pages,
  PAGE_ID
);

@NgModule({
  declarations: [MyPageAComponent],
  imports: [
    CommonModule,
    
    PlaceholderModule,
    
    BuildingBlockDebuggerModule,
    SummaryPanelModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyPageAComponent
      }
    ])
  ],
  providers: [
    {
      provide: BUILDING_BLOCK_META_DATA,
      useValue: EXTRACTED_PAGE_META_DATA
    }
  ]
})
export class MyPageAPageModule {}
