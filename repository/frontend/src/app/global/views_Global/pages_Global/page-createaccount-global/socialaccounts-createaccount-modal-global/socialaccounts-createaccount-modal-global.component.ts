import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-socialaccounts-createaccount-modal-global',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule
    
  ],
  templateUrl: './socialaccounts-createaccount-modal-global.component.html',
  styleUrl: './socialaccounts-createaccount-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialaccountsCreateaccountModalGlobalComponent {}
