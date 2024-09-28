import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnershipsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/partnerships-submenu-global/partnerships-submenu-global.component';

@Component({
  selector: 'app-page-scholarship-partnership-global',
  standalone: true,
  imports: [RouterModule, PartnershipsSubmenuGlobalComponent],
  templateUrl: './page-scholarship-partnership-global.component.html',
  styleUrl: './page-scholarship-partnership-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageScholarshipPartnershipGlobalComponent {}
