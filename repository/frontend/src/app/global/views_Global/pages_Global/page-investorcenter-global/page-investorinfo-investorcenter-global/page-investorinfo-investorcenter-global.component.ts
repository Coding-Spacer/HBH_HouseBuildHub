import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderGlobalComponent } from '../../../components_Global/header-global/header-global.component';
import { HelpfulinfoSurveysGlobalComponent } from '../../../components_Global/surveys-global/helpfulinfo-surveys-global/helpfulinfo-surveys-global.component';
import { InvestorsSubmenuGlobalComponent } from '../../../components_Global/submenu-global/investors-submenu-global/investors-submenu-global.component';
import { StubindevelopmentPlaceholdersGlobalComponent } from '../../../components_Global/placeholders-global/stubindevelopment-placeholders-global/stubindevelopment-placeholders-global.component';
@Component({
  selector: 'app-page-investorinfo-investorcenter-global',
  standalone: true,
  imports: [
    RouterModule,
    HeaderGlobalComponent,
    HelpfulinfoSurveysGlobalComponent,
    InvestorsSubmenuGlobalComponent,
    StubindevelopmentPlaceholdersGlobalComponent,
  ],
  templateUrl: './page-investorinfo-investorcenter-global.component.html',
  styleUrl: './page-investorinfo-investorcenter-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageInvestorinfoInvestorcenterGlobalComponent {}
