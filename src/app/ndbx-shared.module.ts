import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NgModule } from '@angular/core';
import { NxModalModule } from '@aposin/ng-aquila/modal';


  import { NxExpertModule } from '@aposin/ng-aquila/config';




import { NxIsoDateModule } from '@itmp/common';

@NgModule({
  imports: [
    
      NxExpertModule,
    
    NxModalModule.forRoot()
  ],
  exports: [
    
    NxExpertModule,
    
    NxLinkModule,
    NxHeaderModule,
    NxIconModule,
    NxDropdownModule,
    NxGridModule,
    NxIsoDateModule
  ],
  declarations: [],
  providers: []
})
export class NdbxSharedModule {}
