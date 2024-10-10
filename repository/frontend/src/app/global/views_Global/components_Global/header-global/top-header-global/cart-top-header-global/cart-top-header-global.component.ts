import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-top-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './cart-top-header-global.component.html',
  styleUrl: './cart-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartTopHeaderGlobalComponent {}
