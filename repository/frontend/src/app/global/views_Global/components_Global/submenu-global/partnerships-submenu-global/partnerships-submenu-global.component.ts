import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule, } from '@angular/router';

@Component({
  selector: 'app-partnerships-submenu-global',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './partnerships-submenu-global.component.html',
  styleUrl: './partnerships-submenu-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnershipsSubmenuGlobalComponent {
  
}
