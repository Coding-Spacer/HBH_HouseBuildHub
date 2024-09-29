import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderGlobalComponent } from '../../../components_Global/header-global/header-global.component';
import { HelpfulinfoSurveysGlobalComponent } from '../../../components_Global/surveys-global/helpfulinfo-surveys-global/helpfulinfo-surveys-global.component';
import { PartnershipsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/partnerships-submenu-global/partnerships-submenu-global.component';


@Component({
  selector: 'app-page-architect-partnership-global',
  standalone: true,
  imports: [
    RouterModule,
    HeaderGlobalComponent,
    HelpfulinfoSurveysGlobalComponent,
    PartnershipsSubmenuGlobalComponent,
  ],
  templateUrl: './page-architect-partnership-global.component.html',
  styleUrl: './page-architect-partnership-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageArchitectPartnershipGlobalComponent {}
