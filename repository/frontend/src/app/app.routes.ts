import { Routes } from '@angular/router';
import { PageMainGlobalComponent } from './global/views_Global/pages_Global/page-main-global/page-main-global.component';
import { PageCatalogHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageProductHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-product-houseplans/page-product-houseplans.component';
import { PageInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-investorcenter-global.component';
import { PagePartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-partnership-global.component';
import { PageSavedGlobalComponent } from './global/views_Global/pages_Global/page-saved-global/page-saved-global.component';
import { PageNotfoundGlobalComponent } from './global/views_Global/pages_Global/page-notfound-global/page-notfound-global.component';

export const routes: Routes = [
  {
    path: '',
    component: PageMainGlobalComponent,
    data: { breadcrumb: 'Home' },
  },

  {
    path: 'houseplans',
    component: PageCatalogHouseplansComponent,
    data: { breadcrumb: 'Houseplans & Home Floor Plans' },
  },


  {
    path: 'houseplan-id-100Z',
    component: PageProductHouseplansComponent,
    data: { breadcrumb: 'Houseplan ID: 100-Z' },
  },

  {
    path: 'investorcenter',
    component: PageInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Investorcenter' },
  },
  {
    path: 'partnerships',
    component: PagePartnershipGlobalComponent,
    data: { breadcrumb: 'Partnerships' },
  },
  {
    path: 'saved',
    component: PageSavedGlobalComponent,
    data: { breadcrumb: 'Saved' },
  },
  {
    path: '**',
    component: PageNotfoundGlobalComponent,
  },
];
