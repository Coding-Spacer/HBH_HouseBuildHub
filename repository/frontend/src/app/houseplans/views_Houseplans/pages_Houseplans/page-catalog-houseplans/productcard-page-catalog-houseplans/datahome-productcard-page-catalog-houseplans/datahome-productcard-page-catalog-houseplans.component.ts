import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-datahome-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl: './datahome-productcard-page-catalog-houseplans.component.html',
  styleUrl: './datahome-productcard-page-catalog-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatahomeProductcardPageCatalogHouseplansComponent {
  @Input() sqfttotal_Houseplans!: number;
  @Input() wide_Houseplans!: string;
  constructor() {}
}
