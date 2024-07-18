import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MenuBottomHeaderGlobalComponent } from './menu-bottom-header-global/menu-bottom-header-global.component';
import { GeolocationBottomHeaderGlobalComponent } from './geolocation-bottom-header-global/geolocation-bottom-header-global.component';
import { SavedBottomHeaderGlobalComponent } from './saved-bottom-header-global/saved-bottom-header-global.component';
import { DepartmentBottomHeaderGlobalComponent } from './department-bottom-header-global/department-bottom-header-global.component';
import { CustomerserviceBottomHeaderGlobalComponent } from './customerservice-bottom-header-global/customerservice-bottom-header-global.component';
import { DiscountBottomHeaderGlobalComponent } from './discount-bottom-header-global/discount-bottom-header-global.component';




@Component({
  selector: 'app-bottom-header-global',
  standalone: true,
  imports: [
    MenuBottomHeaderGlobalComponent,
    GeolocationBottomHeaderGlobalComponent,
    SavedBottomHeaderGlobalComponent,
    DepartmentBottomHeaderGlobalComponent,
    CustomerserviceBottomHeaderGlobalComponent,
    DiscountBottomHeaderGlobalComponent,
  ],
  templateUrl: './bottom-header-global.component.html',
  styleUrl: './bottom-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomHeaderGlobalComponent {}
