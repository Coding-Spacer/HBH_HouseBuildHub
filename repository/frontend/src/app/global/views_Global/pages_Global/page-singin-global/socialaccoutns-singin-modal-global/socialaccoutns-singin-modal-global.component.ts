import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-socialaccoutns-singin-modal-global',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule
  ],
  templateUrl: './socialaccoutns-singin-modal-global.component.html',
  styleUrl: './socialaccoutns-singin-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialaccoutnsSinginModalGlobalComponent {}
