import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-department-bottom-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './department-bottom-header-global.component.html',
  styleUrl: './department-bottom-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentBottomHeaderGlobalComponent {}
