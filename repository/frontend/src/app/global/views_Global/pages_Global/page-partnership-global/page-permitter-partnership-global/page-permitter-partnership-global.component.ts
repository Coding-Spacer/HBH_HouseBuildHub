import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderGlobalComponent } from '../../../components_Global/header-global/header-global.component';
import { PartnershipsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/partnerships-submenu-global/partnerships-submenu-global.component';

@Component({
  selector: 'app-page-permitter-partnership-global',
  standalone: true,
  imports: [
    RouterModule,
    HeaderGlobalComponent,
    PartnershipsSubmenuGlobalComponent
  ],
  templateUrl: './page-permitter-partnership-global.component.html',
  styleUrl: './page-permitter-partnership-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagePermitterPartnershipGlobalComponent {}
