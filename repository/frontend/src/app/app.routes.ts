import { Routes } from '@angular/router';


import { ConditionsusePageHelpGlobalComponent } from './global/views_Global/pages_Global/page-help-global/conditionsuse-page-help-global/conditionsuse-page-help-global.component';
import { PageCreateaccountGlobalComponent } from './global/views_Global/pages_Global/page-createaccount-global/page-createaccount-global.component';
import { PageCatalogArchitectsComponent } from './architects/views_Architects/pages_Architects/page-catalog-architects/page-catalog-architects.component';
import { PageCatalogBuildersComponent } from './builders/views_Builders/pages_Builders/page-catalog-builders/page-catalog-builders.component';
import { PageCatalogFinancingComponent } from './financing/views_Financing/pages_Financing/page-catalog-financing/page-catalog-financing.component';
import { PageCatalogHomesshopComponent } from './homesshop/views_Homesshop/pages_Homesshop/page-catalog-homesshop/page-catalog-homesshop.component';
import { PageCatalogHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageCatalogLandexpertsComponent } from './landexperts/views_Landexperts/pages_Landexperts/page-catalog-landexperts/page-catalog-landexperts.component';
import { PageCatalogPermittingComponent } from './permitting/views_Permitting/pages_Permitting/page-catalog-permitting/page-catalog-permitting.component';
import { PageCatalogSuppliersComponent } from './suppliers/views_Supliers/pages_Suppliers/page-catalog-suppliers/page-catalog-suppliers.component';
import { PageInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-investorcenter-global.component';
import { PageMainGlobalComponent } from './global/views_Global/pages_Global/page-main-global/page-main-global.component';
import { PageNotfoundGlobalComponent } from './global/views_Global/pages_Global/page-notfound-global/page-notfound-global.component';
import { PagePartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-partnership-global.component';
import { PageProductHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-product-houseplans/page-product-houseplans.component';
import { PageSavedGlobalComponent } from './global/views_Global/pages_Global/page-saved-global/page-saved-global.component';
import { PageSinginGlobalComponent } from './global/views_Global/pages_Global/page-singin-global/page-singin-global.component';
import { PrivacynoticePageHelpGlobalComponent } from './global/views_Global/pages_Global/page-help-global/privacynotice-page-help-global/privacynotice-page-help-global.component';







export const routes: Routes = [
  {
    path: '',
    component: PageMainGlobalComponent,
    data: { breadcrumb: 'Home' },
  },

  {
    path: 'architects',
    component: PageCatalogArchitectsComponent,
    data: { breadcrumb: 'Architects & Designers' },
  },

  {
    path: 'builders',
    component: PageCatalogBuildersComponent,
    data: { breadcrumb: 'Builders' },
  },

  {
    path: 'conditionsuse',
    component: ConditionsusePageHelpGlobalComponent,
    data: { breadcrumb: 'Conditions of Use' },
  },

  {
    path: 'createaccount',
    component: PageCreateaccountGlobalComponent,
    data: { breadcrumb: 'Create Account of Use' },
  },

  {
    path: 'financing',
    component: PageCatalogFinancingComponent,
    data: { breadcrumb: 'Financing' },
  },

  {
    path: 'investorcenter',
    component: PageInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Investorcenter' },
  },

  {
    path: 'homesshop',
    component: PageCatalogHomesshopComponent,
    data: { breadcrumb: 'Homes Shop' },
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
    path: 'landexperts',
    component: PageCatalogLandexpertsComponent,
    data: { breadcrumb: 'Land Experts' },
  },

  {
    path: 'partnerships',
    component: PagePartnershipGlobalComponent,
    data: { breadcrumb: 'Partnerships' },
  },

  {
    path: 'permitting',
    component: PageCatalogPermittingComponent,
    data: { breadcrumb: 'Permit Assistance' },
  },

  {
    path: 'privacynotice',
    component: PrivacynoticePageHelpGlobalComponent,
    data: { breadcrumb: 'Privacy Notice' },
  },

  {
    path: 'saved',
    component: PageSavedGlobalComponent,
    data: { breadcrumb: 'Saved' },
  },

  {
    path: 'singin',
    component: PageSinginGlobalComponent,
    data: { breadcrumb: 'Sing in' },
  },

  {
    path: 'suppliers',
    component: PageCatalogSuppliersComponent,
    data: { breadcrumb: 'Suppliers' },
  },

  {
    path: '**',
    component: PageNotfoundGlobalComponent,
  },
];
