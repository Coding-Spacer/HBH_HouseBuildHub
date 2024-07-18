import { Component } from '@angular/core';
import { CardViewSwitchService } from 'src/app/services-frontend/card-view-switch-service/card-view-switch.service';

@Component({
  selector: 'app-displayviews-page-catalog-houseplans',
  templateUrl: './displayviews-page-catalog-houseplans.component.html',
  styleUrls: ['./displayviews-page-catalog-houseplans.component.css'],
})
export class DisplayviewsPageCatalogHouseplansComponent {
  constructor(cardViewSwitchService: CardViewSwitchService) {}
}
