import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BannerAboveheaderGlobalComponent } from '../../../../global/views_Global/components_Global/banner-global/banner-aboveheader-global/banner-aboveheader-global.component';
import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';

@Component({
  selector: 'app-page-partnership-global',
  standalone: true,
  imports: [
    BannerAboveheaderGlobalComponent,
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent,
  ],
  templateUrl: './page-partnership-global.component.html',
  styleUrl: './page-partnership-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePartnershipGlobalComponent {}
