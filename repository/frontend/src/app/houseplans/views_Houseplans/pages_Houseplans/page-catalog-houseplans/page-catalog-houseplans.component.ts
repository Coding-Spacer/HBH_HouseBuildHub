// page-catalog-houseplans.component.ts
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalManagerGlobalService } from '../../../../global/services_Global/modal-manager-global.service';
import { BannerGlobalService } from '../../../../global/services_Global/banner-global.service';

import { BannerPageCatalogHouseplansComponent } from './banner-page-catalog-houseplans/banner-page-catalog-houseplans.component';
import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';
import { ProductcardPageCatalogHouseplansComponent } from './productcard-page-catalog-houseplans/productcard-page-catalog-houseplans.component';
import { FiltercardPageCatalogHouseplansComponent } from './filtercard-page-catalog-houseplans/filtercard-page-catalog-houseplans.component';
import { ChipsfilterPageCatalogHouseplansComponent } from './chipsfilter-page-catalog-houseplans/chipsfilter-page-catalog-houseplans.component';
import { CardviewtogglePageCatalogHouseplansComponent } from './cardviewtoggle-page-catalog-houseplans/cardviewtoggle-page-catalog-houseplans.component';
import { CardsortingPageCatalogHouseplansComponent } from './cardsorting-page-catalog-houseplans/cardsorting-page-catalog-houseplans.component';
import { InfoModalGlobalComponent } from '../../../../global/views_Global/components_Global/modal-global/info-modal-global/info-modal-global.component';
import { RatingModalGlobalComponent } from '../../../../global/views_Global/components_Global/modal-global/rating-modal-global/rating-modal-global.component';
import { PersonalhelpcardPageCatalogHouseplansComponent } from './personalhelpcard-page-catalog-houseplans/personalhelpcard-page-catalog-houseplans.component';

@Component({
  selector: 'app-page-catalog-houseplans',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbGlobalComponent,
    HeaderGlobalComponent,
    ProductcardPageCatalogHouseplansComponent,
    FiltercardPageCatalogHouseplansComponent,
    ChipsfilterPageCatalogHouseplansComponent,
    CardviewtogglePageCatalogHouseplansComponent,
    CardsortingPageCatalogHouseplansComponent,
    BannerPageCatalogHouseplansComponent,
    InfoModalGlobalComponent,
    RatingModalGlobalComponent,
    PersonalhelpcardPageCatalogHouseplansComponent,
  ],
  templateUrl: './page-catalog-houseplans.component.html',
  styleUrls: ['./page-catalog-houseplans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCatalogHouseplansComponent implements OnInit, OnDestroy {
  currentModalId: string | null = null;
  currentInteractionType: 'click' | 'hover' | null = null;
  bannerVisible = false;

  private bannerSubscription: Subscription = new Subscription();

  constructor(
    private modalService: ModalManagerGlobalService,
    private bannerGlobalService: BannerGlobalService
  ) {}

  ngOnInit() {
    this.modalService.modalState$.subscribe((state) => {
      this.currentModalId = state.modalId;
      this.currentInteractionType = state.interactionType;
    });

    // Включаем баннер при загрузке страницы
    this.bannerGlobalService.showBanner();

    this.bannerSubscription = this.bannerGlobalService.banner$.subscribe(
      (banner) => {
        this.bannerVisible = banner ? banner.isVisible : false;
      }
    );
  }

  ngOnDestroy() {
    this.bannerSubscription.unsubscribe();
  }

  isVisible = true;
  onClosehelpcard() {
    this.isVisible = false;
  }
}
