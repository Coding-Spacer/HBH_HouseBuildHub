import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-investors-submenu-global',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './investors-submenu-global.component.html',
  styleUrl: './investors-submenu-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvestorsSubmenuGlobalComponent {}
