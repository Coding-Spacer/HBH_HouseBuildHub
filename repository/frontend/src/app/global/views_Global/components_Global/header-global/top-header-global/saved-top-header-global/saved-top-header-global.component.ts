import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-saved-top-header-global',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './saved-top-header-global.component.html',
  styleUrl: './saved-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedTopHeaderGlobalComponent {}
