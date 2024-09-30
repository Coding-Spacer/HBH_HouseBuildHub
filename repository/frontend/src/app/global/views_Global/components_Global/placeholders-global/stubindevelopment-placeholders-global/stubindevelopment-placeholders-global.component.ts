import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stubindevelopment-placeholders-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './stubindevelopment-placeholders-global.component.html',
  styleUrl: './stubindevelopment-placeholders-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StubindevelopmentPlaceholdersGlobalComponent {}
