import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumb-global',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemDirective],
  templateUrl: './breadcrumb-global.component.html',
  styleUrls: ['./breadcrumb-global.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbGlobalComponent {}
