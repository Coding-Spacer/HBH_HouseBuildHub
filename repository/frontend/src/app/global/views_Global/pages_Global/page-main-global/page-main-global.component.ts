import { Component, ChangeDetectionStrategy,  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderGlobalComponent } from '../../../../global/views_Global/components_Global/header-global/header-global.component';


@Component({
  selector: 'app-page-main-global',
  standalone: true,
  imports: [
    CommonModule,
    HeaderGlobalComponent, 
    ],
  templateUrl: './page-main-global.component.html',
  styleUrls: ['./page-main-global.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageMainGlobalComponent {}
