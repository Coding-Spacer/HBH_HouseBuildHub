import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-socialaccoutns-singin-modal-global',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './socialaccoutns-singin-modal-global.component.html',
  styleUrl: './socialaccoutns-singin-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialaccoutnsSinginModalGlobalComponent {}
