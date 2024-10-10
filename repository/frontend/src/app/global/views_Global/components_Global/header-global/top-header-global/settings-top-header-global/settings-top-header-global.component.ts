import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings-top-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './settings-top-header-global.component.html',
  styleUrl: './settings-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsTopHeaderGlobalComponent {}
