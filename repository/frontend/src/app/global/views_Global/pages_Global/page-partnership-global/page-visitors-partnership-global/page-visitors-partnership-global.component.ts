import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderGlobalComponent } from '../../../components_Global/header-global/header-global.component';
import { PartnershipsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/partnerships-submenu-global/partnerships-submenu-global.component';

@Component({
  selector: 'app-page-visitors-partnership-global',
  standalone: true,
  imports: [
    HeaderGlobalComponent,
    PartnershipsSubmenuGlobalComponent

  ],
  templateUrl: './page-visitors-partnership-global.component.html',
  styleUrl: './page-visitors-partnership-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageVisitorsPartnershipGlobalComponent {}
