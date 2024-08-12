import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalManagerGlobalService } from '../../../../global/services_Global/modal-manager-global.service';

import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';
import { ProductcardPageCatalogHouseplansComponent } from './productcard-page-catalog-houseplans/productcard-page-catalog-houseplans.component';
import { FiltercardPageCatalogHouseplansComponent } from './filtercard-page-catalog-houseplans/filtercard-page-catalog-houseplans.component';
import { ChipsfilterPageCatalogHouseplansComponent } from './chipsfilter-page-catalog-houseplans/chipsfilter-page-catalog-houseplans.component';
import { CardviewtogglePageCatalogHouseplansComponent } from './cardviewtoggle-page-catalog-houseplans/cardviewtoggle-page-catalog-houseplans.component';
import { CardsortingPageCatalogHouseplansComponent } from './cardsorting-page-catalog-houseplans/cardsorting-page-catalog-houseplans.component';
import { BannerPageCatalogHouseplansComponent } from './banner-page-catalog-houseplans/banner-page-catalog-houseplans.component';
import { InfoModalGlobalComponent } from '../../../../global/views_Global/components_Global/modal-global/info-modal-global/info-modal-global.component';
import { RatingModalGlobalComponent } from '../../../../global/views_Global/components_Global/modal-global/rating-modal-global/rating-modal-global.component';

@Component({
  selector: 'app-page-catalog-houseplans',
  standalone: true,
  imports: [
    CommonModule,
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent,
    ProductcardPageCatalogHouseplansComponent,
    FiltercardPageCatalogHouseplansComponent,
    ChipsfilterPageCatalogHouseplansComponent,
    CardviewtogglePageCatalogHouseplansComponent,
    CardsortingPageCatalogHouseplansComponent,
    BannerPageCatalogHouseplansComponent,
    InfoModalGlobalComponent,
    RatingModalGlobalComponent,
  ],
  templateUrl: './page-catalog-houseplans.component.html',
  styleUrls: ['./page-catalog-houseplans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCatalogHouseplansComponent implements OnInit {
  currentModalId: string | null = null;
  currentInteractionType: 'click' | 'hover' | null = null;

  constructor(private modalService: ModalManagerGlobalService) {}

  ngOnInit() {
    this.modalService.modalState$.subscribe((state) => {
      // Проверяем, какой тип взаимодействия и идентификатор модального окна
      this.currentModalId = state.modalId;
      this.currentInteractionType = state.interactionType;
    });
  }
}
