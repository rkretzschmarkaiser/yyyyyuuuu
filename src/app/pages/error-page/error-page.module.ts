import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';

export const errorPageRoute = {
  loadChildren: () => import('./error-page.module').then(m => m.ErrorPageModule)
};

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ErrorPageComponent
      }
    ])
  ]
})
export class ErrorPageModule {}
