import { Routes } from '@angular/router';


import { ConditionsusePageHelpGlobalComponent } from './global/views_Global/pages_Global/page-help-global/conditionsuse-page-help-global/conditionsuse-page-help-global.component';
import { PageHelpGlobalComponent } from './global/views_Global/pages_Global/page-help-global/page-help-global.component';
import { PageArchitectPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-architect-partnership-global/page-architect-partnership-global.component';
import { PageBuilderPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-builder-partnership-global/page-builder-partnership-global.component';
import { PageCreateaccountGlobalComponent } from './global/views_Global/pages_Global/page-createaccount-global/page-createaccount-global.component';
import { PageCatalogArchitectsComponent } from './architects/views_Architects/pages_Architects/page-catalog-architects/page-catalog-architects.component';
import { PageCatalogBuildersComponent } from './builders/views_Builders/pages_Builders/page-catalog-builders/page-catalog-builders.component';
import { PageCatalogFinancingComponent } from './financing/views_Financing/pages_Financing/page-catalog-financing/page-catalog-financing.component';
import { PageCatalogHomesshopComponent } from './homesshop/views_Homesshop/pages_Homesshop/page-catalog-homesshop/page-catalog-homesshop.component';
import { PageCatalogHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageCatalogLandexpertsComponent } from './landexperts/views_Landexperts/pages_Landexperts/page-catalog-landexperts/page-catalog-landexperts.component';
import { PageCatalogPermittingComponent } from './permitting/views_Permitting/pages_Permitting/page-catalog-permitting/page-catalog-permitting.component';
import { PageCatalogSuppliersComponent } from './suppliers/views_Supliers/pages_Suppliers/page-catalog-suppliers/page-catalog-suppliers.component';
import { PageDeveloperPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-developer-partnership-global/page-developer-partnership-global.component';
import { PageInfluencerPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-influencer-partnership-global/page-influencer-partnership-global.component';
import { PageInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-investorcenter-global.component';
import { PageAboutusInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-aboutus-investorcenter-global/page-aboutus-investorcenter-global.component';
import { PageContactusInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-contactus-investorcenter-global/page-contactus-investorcenter-global.component';
import { PageFinancialreportsInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-financialreports-investorcenter-global/page-financialreports-investorcenter-global.component';
import { PageInvestmenttermsInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-investmentterms-investorcenter-global/page-investmentterms-investorcenter-global.component';
import { PageInvestorinfoInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-investorinfo-investorcenter-global/page-investorinfo-investorcenter-global.component';
import { PageOurgoalsInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-ourgoals-investorcenter-global/page-ourgoals-investorcenter-global.component';
import { PageProjectsforinvestmentInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-projectsforinvestment-investorcenter-global/page-projectsforinvestment-investorcenter-global.component';
import { PageTeamInvestorcenterGlobalComponent } from './global/views_Global/pages_Global/page-investorcenter-global/page-team-investorcenter-global/page-team-investorcenter-global.component';
import { PageLandbrokerPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-landbroker-partnership-global/page-landbroker-partnership-global.component';
import { PageMainGlobalComponent } from './global/views_Global/pages_Global/page-main-global/page-main-global.component';
import { PageNotfoundGlobalComponent } from './global/views_Global/pages_Global/page-notfound-global/page-notfound-global.component';
import { PagePartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-partnership-global.component';
import { PagePartnerstatisticGlobalComponent } from './global/views_Global/pages_Global/page-partnerstatistic-global/page-partnerstatistic-global.component';
import { PageProductHouseplansComponent } from './houseplans/views_Houseplans/pages_Houseplans/page-product-houseplans/page-product-houseplans.component';
import { PageSavedGlobalComponent } from './global/views_Global/pages_Global/page-saved-global/page-saved-global.component';
import { PageSinginGlobalComponent } from './global/views_Global/pages_Global/page-singin-global/page-singin-global.component';
import { PagePermitterPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-permitter-partnership-global/page-permitter-partnership-global.component';
import { PagePlatformanalyticGlobalComponent } from './global/views_Global/pages_Global/page-platformanalytic-global/page-platformanalytic-global.component';
import { PagePrifabhousePartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-prifabhouse-partnership-global/page-prifabhouse-partnership-global.component';
import { PrivacynoticePageHelpGlobalComponent } from './global/views_Global/pages_Global/page-help-global/privacynotice-page-help-global/privacynotice-page-help-global.component';
import { PageRealtorPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-realtor-partnership-global/page-realtor-partnership-global.component';
import { PageSubscriptionplanGlobalComponent } from './global/views_Global/pages_Global/page-subscriptionplan-global/page-subscriptionplan-global.component';
import { PageSupplierPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-supplier-partnership-global/page-supplier-partnership-global.component';
import { PageVisitorsPartnershipGlobalComponent } from './global/views_Global/pages_Global/page-partnership-global/page-visitors-partnership-global/page-visitors-partnership-global.component';









export const routes: Routes = [
  {
    path: '',
    component: PageMainGlobalComponent,
    data: { breadcrumb: 'Home' },
  },

  {
    path: 'partnerships-architects',
    component: PageArchitectPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Architects & Designers' },
  },

  {
    path: 'partnerships-builders',
    component: PageBuilderPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Builders & Craftsmen' },
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
    path: 'partnerships-developers',
    component: PageDeveloperPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Developers' },
  },

  {
    path: 'partnerships-bloggers',
    component: PageInfluencerPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Blogger & Influencer' },
  },

  {
    path: 'partner-statistics',
    component: PagePartnerstatisticGlobalComponent,
    data: { breadcrumb: 'Partner Statistics' },
  },

  {
    path: 'partnerships-permitters',
    component: PagePermitterPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Permitting Consultants' },
  },
  {
    path: 'platform-analytics',
    component: PagePlatformanalyticGlobalComponent,
    data: { breadcrumb: 'Platform Analytics' },
  },

  {
    path: 'partnerships-visitors',
    component: PageVisitorsPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Visitors & Clients' },
  },

  {
    path: 'investorcenter',
    component: PageInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Investorcenter' },
  },

  {
    path: 'investing-about-us',
    component: PageAboutusInvestorcenterGlobalComponent,
    data: { breadcrumb: 'About Us for Investors' },
  },

  {
    path: 'investing-contact-us',
    component: PageContactusInvestorcenterGlobalComponent,
    data: { breadcrumb: 'About Us for Investors' },
  },

  {
    path: 'investing-financial-reports',
    component: PageFinancialreportsInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Financial Reports for Investors' },
  },

  {
    path: 'investing-financing-terms',
    component: PageInvestmenttermsInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Financing Terms' },
  },

  {
    path: 'investing-information',
    component: PageInvestorinfoInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Investor Information ' },
  },

  {
    path: 'investing-goals',
    component: PageOurgoalsInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Our Goals' },
  },

  {
    path: 'investing-projects',
    component: PageProjectsforinvestmentInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Projects for Investors ' },
  },

  {
    path: 'investing-team',
    component: PageTeamInvestorcenterGlobalComponent,
    data: { breadcrumb: 'Our Team ' },
  },

  {
    path: 'help',
    component: PageHelpGlobalComponent,
    data: { breadcrumb: 'Help' },
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
    path: 'partnerships-landbrokers',
    component: PageLandbrokerPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Land Brokers & Land Specialists' },
  },

  {
    path: 'partnerships-manufacturers',
    component: PagePrifabhousePartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Modular Home Manufacturers' },
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
    path: 'partnerships-realtors',
    component: PageRealtorPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Realtors and Real Estate Agents' },
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
    path: 'subcriptions',
    component: PageSubscriptionplanGlobalComponent,
    data: { breadcrumb: 'Subcription plans' },
  },

  {
    path: 'partnerships-suppliers',
    component: PageSupplierPartnershipGlobalComponent,
    data: { breadcrumb: 'Partnership with Suppliers Building Materials' },
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
