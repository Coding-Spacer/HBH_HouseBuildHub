import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-createaccount-modal-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './terms-createaccount-modal-global.component.html',
  styleUrl: './terms-createaccount-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsCreateaccountModalGlobalComponent {}
