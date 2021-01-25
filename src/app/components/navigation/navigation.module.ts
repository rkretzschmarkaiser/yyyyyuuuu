import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NxProgressStepperModule } from '@aposin/ng-aquila/progress-stepper';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, NxProgressStepperModule]
})
export class NavigationModule {}
