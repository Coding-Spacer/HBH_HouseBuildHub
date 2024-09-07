import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-center-header-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './registration-center-header-global.component.html',
  styleUrls: ['./registration-center-header-global.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationCenterHeaderGlobalComponent {
}
