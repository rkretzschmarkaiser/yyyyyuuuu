import { AfterViewInit, Component, HostListener, Inject, OnInit  } from '@angular/core';
import { PfeTrackingService } from '@allianz/ngx-pfe/tracking';
import { environment } from '../environments/environment';
import { NxBreakpoints } from '@aposin/ng-aquila/utils';
import { PAGES_CONFIGURATION } from '@itmp/itmp-core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = $localize`:@@application.title: my-itmp-app`;
 
  
 
  constructor(
    @Inject(PAGES_CONFIGURATION) private pagesConfig,
    private pfeTrackingService: PfeTrackingService) {}

  direction = 'vertical';

  ngAfterViewInit(): void {
    if (environment.production) {
      this.pfeTrackingService.trackifyRefresh();
    }

    console.log(`Generated with Schematics Version '${environment.schematicsVersionUsed}'`);
  }

  ngOnInit(): void {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.direction = event.target.innerWidth > NxBreakpoints.BREAKPOINT_LARGE ? 'vertical' : 'horizontal' ;
  }
}
