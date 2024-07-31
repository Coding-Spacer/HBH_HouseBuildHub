import {  Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BannerAboveheaderGlobalComponent } from '../../../../global/views_Global/components_Global/banner-global/banner-aboveheader-global/banner-aboveheader-global.component';
import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';
import { ProductcardPageCatalogHouseplansComponent } from './productcard-page-catalog-houseplans/productcard-page-catalog-houseplans.component';
import { FiltercardPageCatalogHouseplansComponent } from './filtercard-page-catalog-houseplans/filtercard-page-catalog-houseplans.component';
import { ChipsfilterPageCatalogHouseplansComponent } from './chipsfilter-page-catalog-houseplans/chipsfilter-page-catalog-houseplans.component';
import { CardviewtogglePageCatalogHouseplansComponent } from './cardviewtoggle-page-catalog-houseplans/cardviewtoggle-page-catalog-houseplans.component';
import { CardsortingPageCatalogHouseplansComponent } from './cardsorting-page-catalog-houseplans/cardsorting-page-catalog-houseplans.component';
import { BannerPageCatalogHouseplansComponent } from './banner-page-catalog-houseplans/banner-page-catalog-houseplans.component';

@Component({
  selector: 'app-page-catalog-houseplans',
  standalone: true,
  imports: [
    CommonModule,        
    BannerAboveheaderGlobalComponent,
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent,
    ProductcardPageCatalogHouseplansComponent,
    FiltercardPageCatalogHouseplansComponent,
    ChipsfilterPageCatalogHouseplansComponent,
    CardviewtogglePageCatalogHouseplansComponent,
    CardsortingPageCatalogHouseplansComponent,
    BannerPageCatalogHouseplansComponent,
  ],
  templateUrl: './page-catalog-houseplans.component.html',
  styleUrls: ['./page-catalog-houseplans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class PageCatalogHouseplansComponent { }
  