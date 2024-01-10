import { Component, Input } from '@angular/core';
import { MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'app-customerservice-bottom-header-global',
  templateUrl: './customerservice-bottom-header-global.component.html',
  styleUrls: ['./customerservice-bottom-header-global.component.css'],
})
export class CustomerserviceBottomHeaderGlobalComponent {
  @Input()
  yPosition: MenuPositionY = 'above'; // Додано ! для позначення, що значення буде ініціалізовано пізніше
}
