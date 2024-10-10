import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-message-top-header-global',
  standalone: true,
  imports: [
    RouterModule],
  templateUrl: './message-top-header-global.component.html',
  styleUrl: './message-top-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageTopHeaderGlobalComponent {}
