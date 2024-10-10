import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help-top-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './help-top-header-global.component.html',
  styleUrl: './help-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpTopHeaderGlobalComponent {}
