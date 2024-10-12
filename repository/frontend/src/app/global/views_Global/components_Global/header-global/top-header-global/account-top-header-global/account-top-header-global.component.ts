import { Component, ChangeDetectionStrategy  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-top-header-global',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-top-header-global.component.html',
  styleUrl: './account-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountTopHeaderGlobalComponent {}
