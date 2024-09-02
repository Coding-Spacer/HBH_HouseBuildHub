import { Component, ChangeDetectionStrategy,  } from '@angular/core';

import { AccountcreatePersonalhelpwidgetPageMainGlobalComponent } from './accountcreate-personalhelpwidget-page-main-global/accountcreate-personalhelpwidget-page-main-global.component';
import { AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent } from './additionalinfo-personalhelpwidget-page-main-global/additionalinfo-personalhelpwidget-page-main-global.component';
import { ButtonclosePersonalhelpwidgetPageMainGlobalComponent } from './buttonclose-personalhelpwidget-page-main-global/buttonclose-personalhelpwidget-page-main-global.component';
import { ButtonsendPersonalhelpwidgetPageMainGlobalComponent } from './buttonsend-personalhelpwidget-page-main-global/buttonsend-personalhelpwidget-page-main-global.component';
import { NamePersonalhelpwidgetPageMainGlobalComponent } from './name-personalhelpwidget-page-main-global/name-personalhelpwidget-page-main-global.component';
import { OptionselectPersonalhelpwidgetPageMainGlobalComponent } from './optionselect-personalhelpwidget-page-main-global/optionselect-personalhelpwidget-page-main-global.component';
import { StateselectPersonalhelpwidgetPageMainGlobalComponent } from './stateselect-personalhelpwidget-page-main-global/stateselect-personalhelpwidget-page-main-global.component';
import { TermsPersonalhelpwidgetPageMainGlobalComponent } from './terms-personalhelpwidget-page-main-global/terms-personalhelpwidget-page-main-global.component';
import { ButtonclosePersonalhelpcardPageCatalogHouseplansComponent } from "../../../../../houseplans/views_Houseplans/pages_Houseplans/page-catalog-houseplans/personalhelpcard-page-catalog-houseplans/buttonclose-personalhelpcard-page-catalog-houseplans/buttonclose-personalhelpcard-page-catalog-houseplans.component";
import { TermsPersonalhelpcardPageCatalogHouseplansComponent } from "../../../../../houseplans/views_Houseplans/pages_Houseplans/page-catalog-houseplans/personalhelpcard-page-catalog-houseplans/terms-personalhelpcard-page-catalog-houseplans/terms-personalhelpcard-page-catalog-houseplans.component";

@Component({
  selector: 'app-personalhelpwidget-page-main-global',
  standalone: true,
  imports: [
    AccountcreatePersonalhelpwidgetPageMainGlobalComponent,
    AdditionalinfoPersonalhelpwidgetPageMainGlobalComponent,
    ButtonclosePersonalhelpwidgetPageMainGlobalComponent,
    ButtonsendPersonalhelpwidgetPageMainGlobalComponent,
    NamePersonalhelpwidgetPageMainGlobalComponent,
    OptionselectPersonalhelpwidgetPageMainGlobalComponent,
    StateselectPersonalhelpwidgetPageMainGlobalComponent,
    TermsPersonalhelpwidgetPageMainGlobalComponent,
    ButtonclosePersonalhelpcardPageCatalogHouseplansComponent,
    TermsPersonalhelpcardPageCatalogHouseplansComponent,
  ],
  templateUrl: './personalhelpwidget-page-main-global.component.html',
  styleUrl: './personalhelpwidget-page-main-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalhelpwidgetPageMainGlobalComponent {}
