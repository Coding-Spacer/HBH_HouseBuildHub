import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-buttonsend-personalhelpwidget-page-main-global',
  standalone: true,
  imports: [    
    RouterModule
  ],
  templateUrl:
    './buttonsend-personalhelpwidget-page-main-global.component.html',
  styleUrl: './buttonsend-personalhelpwidget-page-main-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsendPersonalhelpwidgetPageMainGlobalComponent {}
