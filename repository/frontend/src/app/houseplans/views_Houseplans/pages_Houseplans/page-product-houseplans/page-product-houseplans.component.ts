import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';


@Component({
  selector: 'app-page-product-houseplans',
  standalone: true,
  imports: [
    CommonModule,   
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent,
  ],
  templateUrl: './page-product-houseplans.component.html',
  styleUrl: './page-product-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageProductHouseplansComponent {}
