import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';

@Component({
  selector: 'app-page-main-global',
  standalone: true,
  imports: [
    CommonModule,
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent
  ],
  templateUrl: './page-main-global.component.html',
  styleUrl: './page-main-global.component.scss',
})
export class PageMainGlobalComponent {}
