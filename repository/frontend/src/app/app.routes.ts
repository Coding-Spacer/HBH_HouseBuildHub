import { Routes } from '@angular/router';
import { PageCatalogHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-investorcenter-global.component';
import { PagePartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-partnership-global.component';
import { PageSavedGlobalComponent } from './global/views_Global/pages_Global/page-saved-global/page-saved-global.component';

export const routes: Routes = [
  {
    path: '',
    component: PageCatalogHouseplansComponent,
    data: { breadcrumb: 'Home' },
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
];
