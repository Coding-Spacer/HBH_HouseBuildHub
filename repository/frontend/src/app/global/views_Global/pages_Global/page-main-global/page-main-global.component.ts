import { Component, ChangeDetectionStrategy,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ArchitectsectionPageMainGlobalComponent } from './architectsection-page-main-global/architectsection-page-main-global.component';
import { BuildersectionPageMainGlobalComponent } from './buildersection-page-main-global/buildersection-page-main-global.component';
import { DiscountsectionPageMainGlobalComponent } from './discountsection-page-main-global/discountsection-page-main-global.component';
import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { HomeshopsectionPageMainGlobalComponent } from './homeshopsection-page-main-global/homeshopsection-page-main-global.component';
import { HouseplansectionPageMainGlobalComponent } from './houseplansection-page-main-global/houseplansection-page-main-global.component';
import { MortgagesectionPageMainGlobalComponent } from './mortgagesection-page-main-global/mortgagesection-page-main-global.component';
import { PersonalhelpwidgetPageMainGlobalComponent } from './personalhelpwidget-page-main-global/personalhelpwidget-page-main-global.component';
import { SuppliersectionPageMainGlobalComponent } from './suppliersection-page-main-global/suppliersection-page-main-global.component';



@Component({
  selector: 'app-page-main-global',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArchitectsectionPageMainGlobalComponent,
    BuildersectionPageMainGlobalComponent,
    DiscountsectionPageMainGlobalComponent,
    HeaderGlobalComponent,
    HomeshopsectionPageMainGlobalComponent,
    HouseplansectionPageMainGlobalComponent,
    MortgagesectionPageMainGlobalComponent,
    PersonalhelpwidgetPageMainGlobalComponent,
    SuppliersectionPageMainGlobalComponent,

  ],
  templateUrl: './page-main-global.component.html',
  styleUrls: ['./page-main-global.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageMainGlobalComponent {}
