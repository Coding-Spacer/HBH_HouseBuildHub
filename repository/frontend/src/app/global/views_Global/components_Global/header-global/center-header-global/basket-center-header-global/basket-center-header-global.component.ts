import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-basket-center-header-global',
  standalone: true,
  imports: [ MatIconModule],
  templateUrl: './basket-center-header-global.component.html',
  styleUrl: './basket-center-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketCenterHeaderGlobalComponent {}
