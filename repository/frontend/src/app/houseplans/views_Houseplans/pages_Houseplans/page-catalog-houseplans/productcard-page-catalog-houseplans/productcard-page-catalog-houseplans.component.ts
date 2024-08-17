import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';



import { ProductCardHouseplans } from '../../../../interface_Houseplans/product-card-houseplans.interface';

import { AuthorcountryProductcardPageCatalogHouseplansComponent } from './authorcountry-productcard-page-catalog-houseplans/authorcountry-productcard-page-catalog-houseplans.component';
import { ConstructioncostProductcardPageCatalogHouseplansComponent } from './constructioncost-productcard-page-catalog-houseplans/constructioncost-productcard-page-catalog-houseplans.component';
import { ConstructionoptionsProductcardPageCatalogHouseplansComponent } from './constructionoptions-productcard-page-catalog-houseplans/constructionoptions-productcard-page-catalog-houseplans.component';
import { CostestimatorhomeProductcardPageCatalogHouseplansComponent } from './costestimatorhome-productcard-page-catalog-houseplans/costestimatorhome-productcard-page-catalog-houseplans.component';
import { DatahomeProductcardPageCatalogHouseplansComponent } from './datahome-productcard-page-catalog-houseplans/datahome-productcard-page-catalog-houseplans.component';
import { EnergyhometypeProductcardPageCatalogHouseplansComponent } from './energyhometype-productcard-page-catalog-houseplans/energyhometype-productcard-page-catalog-houseplans.component';
import { IdProductcardPageCatalogHouseplansComponent } from './id-productcard-page-catalog-houseplans/id-productcard-page-catalog-houseplans.component';
import { ImageProductcardPageCatalogHouseplansComponent } from './image-productcard-page-catalog-houseplans/image-productcard-page-catalog-houseplans.component';
import { NameProductcardPageCatalogHouseplansComponent } from './name-productcard-page-catalog-houseplans/name-productcard-page-catalog-houseplans.component';
import { OnsaleProductcardPageCatalogHouseplansComponent } from './onsale-productcard-page-catalog-houseplans/onsale-productcard-page-catalog-houseplans.component';
import { RegionalexpertProductcardPageCatalogHouseplansComponent } from './regionalexpert-productcard-page-catalog-houseplans/regionalexpert-productcard-page-catalog-houseplans.component';
import { PriceProductcardPageCatalogHouseplansComponent } from './price-productcard-page-catalog-houseplans/price-productcard-page-catalog-houseplans.component';
import { RatingProductcardPageCatalogHouseplansComponent } from './rating-productcard-page-catalog-houseplans/rating-productcard-page-catalog-houseplans.component';
import { SavebuttonProductcardPageCatalogHouseplansComponent } from './savebutton-productcard-page-catalog-houseplans/savebutton-productcard-page-catalog-houseplans.component';
import { SharebuttonProductcardPageCatalogHouseplansComponent } from './sharebutton-productcard-page-catalog-houseplans/sharebutton-productcard-page-catalog-houseplans.component';
import { VerificationstatusProductcardPageCatalogHouseplansComponent } from './verificationstatus-productcard-page-catalog-houseplans/verificationstatus-productcard-page-catalog-houseplans.component';

import { ViewfloorplansProductcardPageCatalogHouseplansComponent } from './viewfloorplans-productcard-page-catalog-houseplans/viewfloorplans-productcard-page-catalog-houseplans.component';
import { ViewmodelProductcardPageCatalogHouseplansComponent } from './viewmodel-productcard-page-catalog-houseplans/viewmodel-productcard-page-catalog-houseplans.component';
import { ViewvideoProductcardPageCatalogHouseplansComponent } from './viewvideo-productcard-page-catalog-houseplans/viewvideo-productcard-page-catalog-houseplans.component';
import { ViewenteriorProductcardPageCatalogHouseplansComponent } from './viewenterior-productcard-page-catalog-houseplans/viewenterior-productcard-page-catalog-houseplans.component';
import { ViewsunenergyProductcardPageCatalogHouseplansComponent } from './viewsunenergy-productcard-page-catalog-houseplans/viewsunenergy-productcard-page-catalog-houseplans.component';



import { EarnbuttonProductcardPageCatalogHouseplansComponent } from './earnbutton-productcard-page-catalog-houseplans/earnbutton-productcard-page-catalog-houseplans.component';
import { ViewexteriorProductcardPageCatalogHouseplansComponent } from "./viewexterior-productcard-page-catalog-houseplans copy/viewexterior-productcard-page-catalog-houseplans.component";
import { ViewgeomapProductcardPageCatalogHouseplansComponent } from './viewgeomap-productcard-page-catalog-houseplans/viewgeomap-productcard-page-catalog-houseplans.component';


@Component({
  selector: 'app-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    AuthorcountryProductcardPageCatalogHouseplansComponent,
    ConstructioncostProductcardPageCatalogHouseplansComponent,
    ConstructionoptionsProductcardPageCatalogHouseplansComponent,
    CostestimatorhomeProductcardPageCatalogHouseplansComponent,
    DatahomeProductcardPageCatalogHouseplansComponent,
    EnergyhometypeProductcardPageCatalogHouseplansComponent,
    IdProductcardPageCatalogHouseplansComponent,
    ImageProductcardPageCatalogHouseplansComponent,
    NameProductcardPageCatalogHouseplansComponent,
    OnsaleProductcardPageCatalogHouseplansComponent,
    RegionalexpertProductcardPageCatalogHouseplansComponent,
    PriceProductcardPageCatalogHouseplansComponent,
    RatingProductcardPageCatalogHouseplansComponent,
    SavebuttonProductcardPageCatalogHouseplansComponent,
    SharebuttonProductcardPageCatalogHouseplansComponent,
    VerificationstatusProductcardPageCatalogHouseplansComponent,
    ViewfloorplansProductcardPageCatalogHouseplansComponent,
    ViewmodelProductcardPageCatalogHouseplansComponent,
    ViewvideoProductcardPageCatalogHouseplansComponent,
    EarnbuttonProductcardPageCatalogHouseplansComponent,
    ViewexteriorProductcardPageCatalogHouseplansComponent,
    ViewenteriorProductcardPageCatalogHouseplansComponent,
    ViewgeomapProductcardPageCatalogHouseplansComponent,
    ViewsunenergyProductcardPageCatalogHouseplansComponent
],
  templateUrl: './productcard-page-catalog-houseplans.component.html',
  styleUrls: ['./productcard-page-catalog-houseplans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductcardPageCatalogHouseplansComponent {
  productCardHouseplans: ProductCardHouseplans = {
    id_Houseplans: 100,
    name_Houseplans: 'Example House',
    image_Houseplans: 'path/to/image.jpg',
    price_Houseplans: 1240,
    rating_Houseplans: 4.5,
    sqfttotal_Houseplans: 2111,
    wide_Houseplans: '32"40"',
    deep_Houseplans: '20"18"',
    story_Houseplans: 2,
    bed_Houseplans: 3,
    bath_Houseplans: 2,
    basement_Houseplans: true,
    garage_Houseplans: true,
  };


}
