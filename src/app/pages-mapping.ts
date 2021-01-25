import { PfePageMappingService, PageDefinition, PageConfig } from '@allianz/ngx-pfe';
import { errorPageRoute } from './pages/error-page/error-page.module';

import { myPageARoute } from './pages/my-page-a/my-page-a.route';
import { myPageBRoute } from './pages/my-page-b/my-page-b.route';
import { myPageCRoute } from './pages/my-page-c/my-page-c.route';


const pageConfigModel = <TObj>() => (name: keyof TObj) => name;
const getConfigPropertyName = pageConfigModel<ItmpPageConfig>();

export const pages = new Map<string, PageDefinition>();

// Page Config List
export interface ItmpPageConfig extends PageConfig {
  generalErrorPageConfig?: any;
  myPageAPageConfig?: any;
  myPageBPageConfig?: any;
  myPageCPageConfig?: any;
}

// Page Mappings

PfePageMappingService.addLazyLoadedPageToMap(
  pages,
  getConfigPropertyName('myPageAPageConfig'),
  myPageARoute
);

PfePageMappingService.addLazyLoadedPageToMap(
  pages,
  getConfigPropertyName('myPageBPageConfig'),
  myPageBRoute
);

PfePageMappingService.addLazyLoadedPageToMap(
  pages,
  getConfigPropertyName('myPageCPageConfig'),
  myPageCRoute
);


PfePageMappingService.addLazyLoadedPageToMap(
  pages,
  getConfigPropertyName('generalErrorPageConfig'),
  errorPageRoute
);
