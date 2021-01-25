import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { PfeNavigationService } from '@allianz/ngx-pfe';
import { tap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { NxMultiStepperComponent } from '@aposin/ng-aquila/progress-stepper';

const STEPS = [
  {
    "label": "My page A",
    "relatedPages": [
      "my-page-a"
    ]
  },
  {
    "label": "My page B",
    "relatedPages": [
      "my-page-b"
    ]
  },
  {
    "label": "My page C",
    "relatedPages": [
      "my-page-c"
    ]
  }
];
/**
 * We have quite some issues here. The component is rather a demonstration of our intend than a functional component.
 *
 * The current implementation doesn't show the pages from the pages config but renders a static list of items instead.
 * That list doesn't match the actual page configuration. We have two pages that are refelcted by a single entry.
 * So we need to do some extra mapping too. This makes this component a demonstration and nothing more right now.
 *
 * 1. Pages Inference
 * How to get the list of all available pages?
 *
 * A) PfePageMappingService's pages attribute is private. Doesn't contain any labels so it's not suitable anyway.
 * B) PfeNavigationService exposes the current page id but not the overall map
 * C) Generated Code Artefact: We know the pages from our pages.json, so we could pass it through injection but
 * the ordered actually doesn't reflect the page flow. So it's not really suited.
 *
 * 2. Page Mapping
 * An ordered list of pages would fix 1) but we also need a mapping for at least those to scenarios:
 * A) One Step relates to multiple pages (currently 'client information' & 'vehicle-information')
 * B) Branching. This is visually unclear and needs to be revisited by the design/concept team.
 *
 * 3. Visual Presentation
 * The given stepper component is based on CDK Stepper. The CDK Stepper seems to be not suited for our imperative usage.
 * The Stepper assumes a slowly built-up state by guiding the user through the individual steps. There is quite some business logic buried.
 * We only need the visuals, full control and almost no logic in the presentation. Right now items can even be clicked (although I set editable to false).
 * That's why I set the poitner events to none — to prevent any interaction. This is also something UX & Concept would need to deal with:
 * Will this component ever by interactive? Can a user always jump back? Only selected pages? How does this look like?
 *
 * Reference: https://github.developer.allianz.io/ilt/ngx-ndbx/issues/2539
 *
 */
@Component({
  selector: 'itmp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnDestroy {
  steps = STEPS;

  @Input() direction = "vertical";

  @ViewChild('stepper') stepper: NxMultiStepperComponent;
  lastPageSeen: string = null;

  constructor(private pfeNavigationService: PfeNavigationService) {
    this.init();
  }

  init() {
    this.pfeNavigationService.currentPageId$
      .pipe(
        untilDestroyed(this),
        tap((value) => {
          this.lastPageSeen = value;
          this.update();
        })
      )
      .subscribe();
  }

  get currentStepLabel() {
    // TODO: Extract Label for current step to be displayed
    return '';
  }

  update() {
    if (!this.lastPageSeen || this.steps.length === 0) {
      return;
    }

    const stepIndex = STEPS.findIndex((item) => item.relatedPages.includes(this.lastPageSeen));

    /**
     *    Force the stepper to show exactly the given index
     *    by starting at 0 and 'touching' each index once by setting it.
     *    It's the only way to reflect our current progress otherwise the stepper
     *    would just ignore anything that doesn't match 'previouseIndex + 1' due to the linear
     *    mode. We want the linear mode to show future steps being disabled.
     */

    this.stepper.reset();
    const runUntil = (targetIndex) => {
      let index = 0;

      do {
        this.stepper.selectedIndex = index;
      } while (index++ < targetIndex);
    };

    runUntil(stepIndex);
  }

  ngOnDestroy(): void {}
}
