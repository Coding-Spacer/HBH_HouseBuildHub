import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderGlobalComponent } from '../../../components_Global/header-global/header-global.component';
import { PartnershipsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/partnerships-submenu-global/partnerships-submenu-global.component';

@Component({
  selector: 'app-page-landbroker-partnership-global',
  standalone: true,
  imports: [
    RouterModule,
    HeaderGlobalComponent,
    PartnershipsSubmenuGlobalComponent,
  ],
  templateUrl: './page-landbroker-partnership-global.component.html',
  styleUrl: './page-landbroker-partnership-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLandbrokerPartnershipGlobalComponent {}
