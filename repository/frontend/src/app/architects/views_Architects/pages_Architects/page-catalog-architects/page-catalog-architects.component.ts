import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';

@Component({
  selector: 'app-page-catalog-architects',
  standalone: true,
  imports: [
    RouterModule,
    HeaderGlobalComponent,

  ],
  templateUrl: './page-catalog-architects.component.html',
  styleUrl: './page-catalog-architects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCatalogArchitectsComponent {}
