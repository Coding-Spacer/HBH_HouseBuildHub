import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo-top-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './logo-top-header-global.component.html',
  styleUrl: './logo-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoTopHeaderGlobalComponent {}
