import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-saved-bottom-header-global',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './saved-bottom-header-global.component.html',
  styleUrl: './saved-bottom-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedBottomHeaderGlobalComponent {}
