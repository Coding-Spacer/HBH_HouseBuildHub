import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';
import { BreadcrumbGlobalComponent } from '../../../../global/views_Global/components_Global/breadcrumb-global/breadcrumb-global/breadcrumb-global.component';

@Component({
  selector: 'app-page-saved-global',
  standalone: true,
  imports: [
    
    HeaderGlobalComponent,
    BreadcrumbGlobalComponent,
  ],
  templateUrl: './page-saved-global.component.html',
  styleUrl: './page-saved-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSavedGlobalComponent {}
