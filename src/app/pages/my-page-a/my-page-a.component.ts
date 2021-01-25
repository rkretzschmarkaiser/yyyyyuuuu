import { Component } from '@angular/core';
import { PFEBuildingBlockPage } from '@itmp/pfe-connector';

@Component({
  selector: 'app-my-page-a',
  templateUrl: './my-page-a.component.html'
})
export class MyPageAComponent extends PFEBuildingBlockPage {
  readonly id: string = 'my-page-a';
}
