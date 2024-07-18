import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-id-productcard-page-catalog-houseplans',
  standalone: true,
  templateUrl: './id-productcard-page-catalog-houseplans.component.html',
  styleUrls: ['./id-productcard-page-catalog-houseplans.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdProductcardPageCatalogHouseplansComponent {
  @Input() id_Houseplans!: number;

  constructor() {}
}
