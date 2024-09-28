import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderGlobalComponent } from '../../../components_Global/header-global/header-global.component';
import { PartnershipsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/partnerships-submenu-global/partnerships-submenu-global.component';

@Component({
  selector: 'app-page-developer-partnership-global',
  standalone: true,
  imports: [
    RouterModule,
    HeaderGlobalComponent,
    PartnershipsSubmenuGlobalComponent,],
  templateUrl: './page-developer-partnership-global.component.html',
  styleUrl: './page-developer-partnership-global.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageDeveloperPartnershipGlobalComponent {}
