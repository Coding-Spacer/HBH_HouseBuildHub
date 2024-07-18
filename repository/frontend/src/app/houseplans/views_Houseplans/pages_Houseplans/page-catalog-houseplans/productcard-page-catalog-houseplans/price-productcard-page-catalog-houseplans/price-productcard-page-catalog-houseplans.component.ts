import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-price-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl: './price-productcard-page-catalog-houseplans.component.html',
  styleUrl: './price-productcard-page-catalog-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceProductcardPageCatalogHouseplansComponent {
  @Input() price_Houseplans!: number;

  constructor() {}
}
