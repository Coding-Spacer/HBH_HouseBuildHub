import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';

@Component({
  selector: 'app-page-catalog-homesshop',
  standalone: true,
  imports: [RouterModule, HeaderGlobalComponent],
  templateUrl: './page-catalog-homesshop.component.html',
  styleUrl: './page-catalog-homesshop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCatalogHomesshopComponent {}
