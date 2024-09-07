// banner-page-catalog-houseplans.component.ts
import { Component } from '@angular/core';
import { BannerGlobalService } from '../../../../../global/services_Global/banner-global.service';

@Component({
  selector: 'app-banner-page-catalog-houseplans',
  standalone: true,
  templateUrl: './banner-page-catalog-houseplans.component.html',
  styleUrls: ['./banner-page-catalog-houseplans.component.scss'],
})
export class BannerPageCatalogHouseplansComponent {
  constructor(private bannerGlobalService: BannerGlobalService) {}

  closeBanner(): void {
    this.bannerGlobalService.hideBanner(); // Викликає метод для приховування банера
  }
}
