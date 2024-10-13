import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HouseplansSubmenuHeaderGlobalComponent } from '../../submenu-global/houseplans-submenu-header-global/houseplans-submenu-header-global.component';






@Component({
  selector: 'app-bottom-header-global',
  standalone: true,
  imports: [ 
    HouseplansSubmenuHeaderGlobalComponent    
  ],
  templateUrl: './bottom-header-global.component.html',
  styleUrl: './bottom-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomHeaderGlobalComponent {}
