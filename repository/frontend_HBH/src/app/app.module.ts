/* -------------------------------------- */
/* IMPORT MODULES  */
/* A_modules*/
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/* B_modules */
import { BreadcrumbModule } from 'xng-breadcrumb';
import { BrowserModule } from '@angular/platform-browser';
/* N_modules */
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
/* M_modules */
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
/* C_modules */
import { CdkMenuItemCheckbox } from '@angular/cdk/menu';
import { CdkMenuGroup } from '@angular/cdk/menu';
import { CdkMenu } from '@angular/cdk/menu';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { CdkMenuItem } from '@angular/cdk/menu';
import { CdkMenuBar } from '@angular/cdk/menu';

/* -------------------------------------- */
/* IMPORT COMPONENTS */
/* B_components */
import { BannerAboveheaderGlobalComponent } from './views/components/components_Global/banner-global/banner-aboveheader-global/banner-aboveheader-global.component';
import { BannerPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/banner-page-catalog-houseplans/banner-page-catalog-houseplans.component';
import { BasketCenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/basket-center-header-global/basket-center-header-global.component';
import { BottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/bottom-header-global.component';
import { BottomPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/bottom-page-main-global/bottom-page-main-global.component';
import { BreadcrumbGlobalComponent } from './views/components/components_Global/breadcrumb-global/breadcrumb-global.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* C_components */
import { CategorymenuAllSelectHeaderGlobalComponent } from './views/ui/ui_Global/select_Global/categorymenu-all-select-header-global/categorymenu-all-select-header-global.component';
import { CategorymenuHouseplansSelectHeaderGlobalComponent } from './views/ui/ui_Global/select_Global/categorymenu-houseplans-select-header-global/categorymenu-houseplans-select-header-global.component';
import { CategorymenuBuildersSelectHeaderGlobalComponent } from './views/ui/ui_Global/select_Global/categorymenu-builders-select-header-global/categorymenu-builders-select-header-global.component';
import { CenterPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/center-page-main-global/center-page-main-global.component';
import { ClimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/climate-verticalproductcardview-productcardviews-page-catalog-houseplans/climate-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { CenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/center-header-global.component';
import { CategoryselectionCenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/categoryselection-center-header-global/categoryselection-center-header-global.component';
import { CustomerserviceBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/customerservice-bottom-header-global/customerservice-bottom-header-global.component';
import { CategoryBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/category-bottom-header-global/category-bottom-header-global.component';
/* D_components */
import { DisplayviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/displayviews-page-catalog-houseplans/displayviews-page-catalog-houseplans.component';
import { DatahomeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/datahome-verticalproductcardview-productcardviews-page-catalog-houseplans/datahome-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { DataenergyVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/dataenergy-verticalproductcardview-productcardviews-page-catalog-houseplans/dataenergy-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { DiscountBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/discount-bottom-header-global/discount-bottom-header-global.component';
import { DepartmentBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/department-bottom-header-global/department-bottom-header-global.component';
/* E_components */
import { EstimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/estimate-verticalproductcardview-productcardviews-page-catalog-houseplans/estimate-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
/* F_components */
import { FooterGlobalComponent } from './views/components/components_Global/footer-global/footer-global.component';
import { FormsModule } from '@angular/forms';
import { FilterselectionPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/filterselection-page-catalog-houseplans/filterselection-page-catalog-houseplans.component';
/* G_components */
import { GeolocationBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/geolocation-bottom-header-global/geolocation-bottom-header-global.component';
/* H_components */
import { HeaderGlobalComponent } from './views/components/components_Global/header-global/header-global.component';
import { HorizontalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/horizontalproductcardview-productcardviews-page-catalog-houseplans/horizontalproductcardview-productcardviews-page-catalog-houseplans.component';
/* I_components */
import { IdVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/id-verticalproductcardview-productcardviews-page-catalog-houseplans/id-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { ImageVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/image-verticalproductcardview-productcardviews-page-catalog-houseplans/image-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { InfoarchitectsCenterPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/center-page-main-global/infoarchitects-center-page-main-global/infoarchitects-center-page-main-global.component';
import { InfobannerTopPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/top-page-main-global/infobanner-top-page-main-global/infobanner-top-page-main-global.component';
import { InfobuildersCenterPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/center-page-main-global/infobuilders-center-page-main-global/infobuilders-center-page-main-global.component';
import { InfohouseplansCenterPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/center-page-main-global/infohouseplans-center-page-main-global/infohouseplans-center-page-main-global.component';
import { InfoitemsTopPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/top-page-main-global/infoitems-top-page-main-global/infoitems-top-page-main-global.component';
import { InfosellersCenterPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/center-page-main-global/infosellers-center-page-main-global/infosellers-center-page-main-global.component';
import { InputSearchGlobalComponent } from './views/ui/ui_Global/input_Global/input-search-global/input-search-global.component';
/* L_components */
import { LanguageselectionCenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/languageselection-center-header-global/languageselection-center-header-global.component';
/* N_components */
import { NameVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/name-verticalproductcardview-productcardviews-page-catalog-houseplans/name-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
/* P_components */
import { PageAccountPersonalinfoGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-personalinfo-global/page-account-personalinfo-global.component';
import { PageAccountSecurityGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-security-global/page-account-security-global.component';
import { PageAccountSellerGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-seller-global/page-account-seller-global.component';
import { PageAccountBuilderGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-builder-global/page-account-builder-global.component';
import { PageAccountProjectGlobalComponent } from './views/pages/pages_Global/page-account-global/page-account-project-global/page-account-project-global.component';
import { PageAgreementGlobalComponent } from './views/pages/pages_Global/page-agreement-global/page-agreement-global.component';
import { PageBacketGlobalComponent } from './views/pages/pages_Global/page-backet-global/page-backet-global.component';
import { PageBonusGlobalComponent } from './views/pages/pages_Global/page-bonus-global/page-bonus-global.component';
import { PageCardArchitectorsComponent } from './views/pages/pages_Architectors/page-card-architectors/page-card-architectors.component';
import { PageCardBuildersComponent } from './views/pages/pages_Builders/page-card-builders/page-card-builders.component';
import { PageCardMaterialsComponent } from './views/pages/pages_Materials/page-card-materials/page-card-materials.component';
import { PageCardSellersComponent } from './views/pages/pages_Sellers/page-card-sellers/page-card-sellers.component';
import { PageCardShopsComponent } from './views/pages/pages_Shops/page-card-shops/page-card-shops.component';
import { PageCatalogArchitectorsComponent } from './views/pages/pages_Architectors/page-catalog-architectors/page-catalog-architectors.component';
import { PageCatalogBuildersComponent } from './views/pages/pages_Builders/page-catalog-builders/page-catalog-builders.component';
import { PageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/page-catalog-houseplans.component';
import { PageCatalogMaterialsComponent } from './views/pages/pages_Materials/page-catalog-materials/page-catalog-materials.component';
import { PageCatalogSellersComponent } from './views/pages/pages_Sellers/page-catalog-sellers/page-catalog-sellers.component';
import { PageCatalogShopsComponent } from './views/pages/pages_Shops/page-catalog-shops/page-catalog-shops.component';
import { PageCategoryArchitectorsComponent } from './views/pages/pages_Architectors/page-category-architectors/page-category-architectors.component';
import { PageCategoryBuildersComponent } from './views/pages/pages_Builders/page-category-builders/page-category-builders.component';
import { PageCategoryHouseplansComponent } from './views/pages/pages_Houseplans/page-category-houseplans/page-category-houseplans.component';
import { PageCategoryMaterialsComponent } from './views/pages/pages_Materials/page-category-materials/page-category-materials.component';
import { PageCategorySellersComponent } from './views/pages/pages_Sellers/page-category-sellers/page-category-sellers.component';
import { PageCategoryShopsComponent } from './views/pages/pages_Shops/page-category-shops/page-category-shops.component';
import { PageContactGlobalComponent } from './views/pages/pages_Global/page-contact-global/page-contact-global.component';
import { PageProductHouseplansComponent } from './views/pages/pages_Houseplans/page-product-houseplans/page-product-houseplans.component';
import { PageRegistrationGlobalComponent } from './views/pages/pages_Global/page-registration-global/page-registration-global.component';
import { PagePartnershipGlobalComponent } from './views/pages/pages_Global/page-partnership-global/page-partnership-global.component';
import { PageNotfoundGlobalComponent } from './views/pages/pages_Global/page-notfound-global/page-notfound-global.component';
import { PageMainArchitectorsComponent } from './views/pages/pages_Architectors/page-main-architectors/page-main-architectors.component';
import { PageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/page-main-global.component';
import { PageMainHouseplansComponent } from './views/pages/pages_Houseplans/page-main-houseplans/page-main-houseplans.component';
import { PageMainBuildersComponent } from './views/pages/pages_Builders/page-main-builders/page-main-builders.component';
import { PageMainMaterialsComponent } from './views/pages/pages_Materials/page-main-materials/page-main-materials.component';
import { PageMainShopsComponent } from './views/pages/pages_Shops/page-main-shops/page-main-shops.component';
import { PageMainSellersComponent } from './views/pages/pages_Sellers/page-main-sellers/page-main-sellers.component';
import { ProductfilterleftpanelPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productfilterleftpanel-page-catalog-houseplans/productfilterleftpanel-page-catalog-houseplans.component';
import { PaginationGlobalComponent } from './views/components/components_Global/pagination-global/pagination-global.component';
import { ProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/productcardviews-page-catalog-houseplans.component';
import { PriceVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/price-verticalproductcardview-productcardviews-page-catalog-houseplans/price-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { PageSavedGlobalComponent } from './views/pages/pages_Global/page-saved-global/page-saved-global.component';
/* R_components */
import { RegionSelectFooterGlobalComponent } from './views/ui/ui_Global/select_Global/region-select-footer-global/region-select-footer-global.component';
import { ReviewedGlobalComponent } from './views/components/components_Global/reviewed-global/reviewed-global.component';
import { RecommendedGlobalComponent } from './views/components/components_Global/recommended-global/recommended-global.component';
import { RatingVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/rating-verticalproductcardview-productcardviews-page-catalog-houseplans/rating-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { RegistrationCenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/registration-center-header-global/registration-center-header-global.component';
/* S_components */
import { SidebarrightGlobalComponent } from './views/components/components_Global/sidebarright-global/sidebarright-global.component';
import { ShareSelectFooterGlobalComponent } from './views/ui/ui_Global/select_Global/share-select-footer-global/share-select-footer-global.component';
import { SigninSelectFooterGlobalComponent } from './views/ui/ui_Global/select_Global/signin-select-footer-global/signin-select-footer-global.component';
import { ScrolltotopGlobalComponent } from './views/components/components_Global/scrolltotop-global/scrolltotop-global.component';
import { ServicelinksrightpanelPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/servicelinksrightpanel-page-catalog-houseplans/servicelinksrightpanel-page-catalog-houseplans.component';
import { SortingPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/sorting-page-catalog-houseplans/sorting-page-catalog-houseplans.component';
import { SavedBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/saved-bottom-header-global/saved-bottom-header-global.component';
import { SavedGlobalComponent } from './views/components/components_Global/saved-global/saved-global.component';
import { SearchbarCenterHeaderGlobalComponent } from './views/components/components_Global/header-global/center-header-global/searchbar-center-header-global/searchbar-center-header-global.component';
/* T_components */
import { TextseoPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/textseo-page-catalog-houseplans/textseo-page-catalog-houseplans.component';
import { TopPageMainGlobalComponent } from './views/pages/pages_Global/page-main-global/top-page-main-global/top-page-main-global.component';
import { TypeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/type-verticalproductcardview-productcardviews-page-catalog-houseplans/type-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { TopHeaderGlobalComponent } from './views/components/components_Global/header-global/top-header-global/top-header-global.component';
/* V_components */
import { VerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { ViewpointVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/viewpoint-verticalproductcardview-productcardviews-page-catalog-houseplans/viewpoint-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { VerifiedVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent } from './views/pages/pages_Houseplans/page-catalog-houseplans/productcardviews-page-catalog-houseplans/verticalproductcardview-productcardviews-page-catalog-houseplans/verified-verticalproductcardview-productcardviews-page-catalog-houseplans/verified-verticalproductcardview-productcardviews-page-catalog-houseplans.component';
import { PageInvestorcenterGlobalComponent } from './views/pages/pages_Global/page-investorcenter-global/page-investorcenter-global.component';
import { MenuBottomHeaderGlobalComponent } from './views/components/components_Global/header-global/bottom-header-global/menu-bottom-header-global/menu-bottom-header-global.component';

/* -------------------------------------- */
/* IMPORT SERVICES */
/* C_services */
import { CardViewSwitchService } from './services-frontend/card-view-switch-service/card-view-switch.service';

/* -------------------------------------- */
@NgModule({
  declarations: [
    AppComponent,

    /* B */
    BannerAboveheaderGlobalComponent,
    BannerPageCatalogHouseplansComponent,
    BasketCenterHeaderGlobalComponent,
    BreadcrumbGlobalComponent,
    BottomHeaderGlobalComponent,
    BottomPageMainGlobalComponent,
    /* C */
    CategorymenuAllSelectHeaderGlobalComponent,
    CategoryBottomHeaderGlobalComponent,
    CategoryselectionCenterHeaderGlobalComponent,
    CategorymenuHouseplansSelectHeaderGlobalComponent,
    CategorymenuBuildersSelectHeaderGlobalComponent,
    CenterHeaderGlobalComponent,
    CenterPageMainGlobalComponent,
    ClimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    CustomerserviceBottomHeaderGlobalComponent,
    /* D */
    DatahomeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    DataenergyVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    DiscountBottomHeaderGlobalComponent,
    DisplayviewsPageCatalogHouseplansComponent,
    DepartmentBottomHeaderGlobalComponent,
    /* E */
    EstimateVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    /* F */
    FilterselectionPageCatalogHouseplansComponent,
    FooterGlobalComponent,
    /* G */
    GeolocationBottomHeaderGlobalComponent,
    /* H */
    HeaderGlobalComponent,
    HorizontalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    /* I */
    IdVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    ImageVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    InputSearchGlobalComponent,
    InfoarchitectsCenterPageMainGlobalComponent,
    InfobannerTopPageMainGlobalComponent,
    InfobuildersCenterPageMainGlobalComponent,
    InfohouseplansCenterPageMainGlobalComponent,
    InfoitemsTopPageMainGlobalComponent,
    InfosellersCenterPageMainGlobalComponent,
    /* L */
    LanguageselectionCenterHeaderGlobalComponent,
    /* M */

    /* N */
    NameVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    /* P */
    PageNotfoundGlobalComponent,
    PageMainGlobalComponent,
    PageContactGlobalComponent,
    PageBacketGlobalComponent,
    PageAgreementGlobalComponent,
    PageBonusGlobalComponent,
    PageRegistrationGlobalComponent,
    PagePartnershipGlobalComponent,
    PageAccountPersonalinfoGlobalComponent,
    PageAccountSecurityGlobalComponent,
    PageAccountSellerGlobalComponent,
    PageAccountBuilderGlobalComponent,
    PageAccountProjectGlobalComponent,
    PageMainHouseplansComponent,
    PageCategoryHouseplansComponent,
    PageMainBuildersComponent,
    PageCategoryBuildersComponent,
    PageCardBuildersComponent,
    PageMainArchitectorsComponent,
    PageCategoryArchitectorsComponent,
    PageCardArchitectorsComponent,
    PageCategoryMaterialsComponent,
    PageMainMaterialsComponent,
    PageCardMaterialsComponent,
    PageCategorySellersComponent,
    PageMainSellersComponent,
    PageCardSellersComponent,
    PageCategoryShopsComponent,
    PageMainShopsComponent,
    PageCardShopsComponent,
    PageCatalogArchitectorsComponent,
    PageCatalogBuildersComponent,
    PageCatalogHouseplansComponent,
    PageCatalogMaterialsComponent,
    PageCatalogSellersComponent,
    PageCatalogShopsComponent,
    PageProductHouseplansComponent,
    PageSavedGlobalComponent,
    ProductfilterleftpanelPageCatalogHouseplansComponent,
    PaginationGlobalComponent,
    ProductcardviewsPageCatalogHouseplansComponent,
    PriceVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    /* R */
    RatingVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    RegionSelectFooterGlobalComponent,
    RegistrationCenterHeaderGlobalComponent,
    ReviewedGlobalComponent,
    RecommendedGlobalComponent,
    /* S */
    SavedBottomHeaderGlobalComponent,
    SavedGlobalComponent,
    ScrolltotopGlobalComponent,
    SidebarrightGlobalComponent,
    ShareSelectFooterGlobalComponent,
    SigninSelectFooterGlobalComponent,
    SearchbarCenterHeaderGlobalComponent,
    ServicelinksrightpanelPageCatalogHouseplansComponent,
    ServicelinksrightpanelPageCatalogHouseplansComponent,
    SortingPageCatalogHouseplansComponent,
    /* T */
    TextseoPageCatalogHouseplansComponent,
    TypeVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    TopHeaderGlobalComponent,
    TopPageMainGlobalComponent,
    /* V */
    VerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    ViewpointVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    VerifiedVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent,
    PageInvestorcenterGlobalComponent,
    MenuBottomHeaderGlobalComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    MatIconModule,
    NgxPaginationModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CdkMenuBar,
  ],

  providers: [CardViewSwitchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
