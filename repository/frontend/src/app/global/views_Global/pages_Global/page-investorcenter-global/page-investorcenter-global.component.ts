import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerAboveheaderGlobalComponent } from '../../components_Global/banner-global/banner-aboveheader-global/banner-aboveheader-global.component';
import { HeaderGlobalComponent } from '../../components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';


@Component({
  selector: 'app-page-investorcenter-global',
  standalone: true,
  imports: [
    RouterModule,
    BannerAboveheaderGlobalComponent,
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent


  ],
  templateUrl: './page-investorcenter-global.component.html',
  styleUrl: './page-investorcenter-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageInvestorcenterGlobalComponent {}
