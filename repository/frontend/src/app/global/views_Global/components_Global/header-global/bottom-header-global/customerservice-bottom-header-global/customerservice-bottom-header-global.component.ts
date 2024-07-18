import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-customerservice-bottom-header-global',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './customerservice-bottom-header-global.component.html',
  styleUrls: ['./customerservice-bottom-header-global.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerserviceBottomHeaderGlobalComponent {}
