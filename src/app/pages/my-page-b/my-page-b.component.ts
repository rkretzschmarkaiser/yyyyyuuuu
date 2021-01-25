import { Component } from '@angular/core';
import { PFEBuildingBlockPage } from '@itmp/pfe-connector';

@Component({
  selector: 'app-my-page-b',
  templateUrl: './my-page-b.component.html'
})
export class MyPageBComponent extends PFEBuildingBlockPage {
  readonly id: string = 'my-page-b';
}
