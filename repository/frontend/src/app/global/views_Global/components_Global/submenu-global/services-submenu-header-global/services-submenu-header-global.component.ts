import { Component } from '@angular/core';
import { MenuManagerGlobalService } from '../../../../services_Global/menu-manager-global.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-submenu-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './services-submenu-header-global.component.html',
  styleUrl: './services-submenu-header-global.component.scss',
})
export class ServicesSubmenuHeaderGlobalComponent {
  isMenuVisible$ = this.menuManagerGlobalService.isMenuVisible$;

  constructor(private menuManagerGlobalService: MenuManagerGlobalService) {}

  closeMenu() {
    this.menuManagerGlobalService.toggleMenuVisibility();
  }
}
