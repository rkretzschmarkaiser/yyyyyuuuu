import { Component } from '@angular/core';
import { PFEBuildingBlockPage } from '@itmp/pfe-connector';

@Component({
  selector: 'app-my-page-c',
  templateUrl: './my-page-c.component.html'
})
export class MyPageCComponent extends PFEBuildingBlockPage {
  readonly id: string = 'my-page-c';
}
