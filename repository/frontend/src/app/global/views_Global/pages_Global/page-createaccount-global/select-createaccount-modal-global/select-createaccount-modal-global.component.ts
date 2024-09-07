import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-createaccount-modal-global',
  standalone: true,
  imports: [
    RouterModule,
    
  ],
  templateUrl: './select-createaccount-modal-global.component.html',
  styleUrl: './select-createaccount-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCreateaccountModalGlobalComponent {}
