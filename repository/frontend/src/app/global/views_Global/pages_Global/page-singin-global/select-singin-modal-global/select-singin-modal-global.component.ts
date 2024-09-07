import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-select-singin-modal-global',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './select-singin-modal-global.component.html',
  styleUrl: './select-singin-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectSinginModalGlobalComponent {
}