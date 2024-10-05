import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagerGlobalService } from '../../../../../services_Global/menu-manager-global.service';
import { ServicesSubmenuHeaderGlobalComponent } from '../../../submenu-global/services-submenu-header-global/services-submenu-header-global.component';

@Component({
  selector: 'app-services-top-header-global',
  standalone: true,
  imports: [CommonModule, ServicesSubmenuHeaderGlobalComponent],
  templateUrl: './services-top-header-global.component.html',
  styleUrl: './services-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesTopHeaderGlobalComponent implements OnInit {
  isMenuVisible$ = this.menuManagerGlobalService.isMenuVisible$;

  constructor(private menuManagerGlobalService: MenuManagerGlobalService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuManagerGlobalService.toggleMenuVisibility();
  }


}
