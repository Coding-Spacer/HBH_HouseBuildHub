import { Component } from '@angular/core';

import { AccountcreatePersonalhelpcardPageCatalogHouseplansComponent } from './accountcreate-personalhelpcard-page-catalog-houseplans/accountcreate-personalhelpcard-page-catalog-houseplans.component';
import { ButtonclosePersonalhelpcardPageCatalogHouseplansComponent } from './buttonclose-personalhelpcard-page-catalog-houseplans/buttonclose-personalhelpcard-page-catalog-houseplans.component';
import { NamePersonalhelpcardPageCatalogHouseplansComponent } from './name-personalhelpcard-page-catalog-houseplans/name-personalhelpcard-page-catalog-houseplans.component';
import { StateselectPersonalhelpcardPageCatalogHouseplansComponent } from './stateselect-personalhelpcard-page-catalog-houseplans/stateselect-personalhelpcard-page-catalog-houseplans.component';
import { TermsPersonalhelpcardPageCatalogHouseplansComponent } from './terms-personalhelpcard-page-catalog-houseplans/terms-personalhelpcard-page-catalog-houseplans.component';

@Component({
  selector: 'app-personalhelpcard-page-catalog-houseplans',
  standalone: true,
  imports: [
    AccountcreatePersonalhelpcardPageCatalogHouseplansComponent,
    ButtonclosePersonalhelpcardPageCatalogHouseplansComponent,
    NamePersonalhelpcardPageCatalogHouseplansComponent,
    StateselectPersonalhelpcardPageCatalogHouseplansComponent,
    TermsPersonalhelpcardPageCatalogHouseplansComponent

  ],
  templateUrl: './personalhelpcard-page-catalog-houseplans.component.html',
  styleUrl: './personalhelpcard-page-catalog-houseplans.component.scss'
})
export class PersonalhelpcardPageCatalogHouseplansComponent {

}
