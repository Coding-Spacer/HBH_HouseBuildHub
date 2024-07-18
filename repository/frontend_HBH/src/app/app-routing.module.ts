import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/page-main-global.component';
import { PageContactGlobalComponent } from './views/pages/pages_Global/page-contact-global/page-contact-global.component';
import { PageNotfoundGlobalComponent  } from './views/pages/pages_Global/page-notfound-global/page-notfound-global.component';
import { PagePartnershipGlobalComponent } from './views/pages/pages_Global/page-partnership-global/page-partnership-global.component';
import { PageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageCatalogBuildersComponent } from './views/pages/pages_Builders/page-catalog-builders/page-catalog-builders.component';
import { PageProductHouseplansComponent } from './views/pages/pages_Houseplans/page-product-houseplans/page-product-houseplans.component';
import { PageSavedGlobalComponent } from './views/pages/pages_Global/page-saved-global/page-saved-global.component';
import { PageInvestorcenterGlobalComponent } from './views/pages/pages_Global/page-investorcenter-global/page-investorcenter-global.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageMainGlobalComponent,
    data: {
      breadcrumb: {
        label: 'HOME',
        info: { myData: { icon: 'home', iconType: 'material' } },
      },
    },
  },

  { path: 'contact', component: PageContactGlobalComponent },

  { path: 'investorcenter', component: PageInvestorcenterGlobalComponent },

  { path: 'partnership', component: PagePartnershipGlobalComponent },
  {
    path: 'houseplans',
    component: PageCatalogHouseplansComponent,
    data: { breadcrumb: 'Houseplans' },
  },
  {
    path: 'builders',
    component: PageCatalogBuildersComponent,
    data: { breadcrumb: 'Builders' },
  },
  {
    path: 'saved',
    component: PageSavedGlobalComponent,
    data: { breadcrumb: 'Saved' },
  },
  {
    path: 'houseplans/product',
    component: PageProductHouseplansComponent,
    data: { breadcrumb: 'Product' },
  },



  { path: '**', component: PageNotfoundGlobalComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }




