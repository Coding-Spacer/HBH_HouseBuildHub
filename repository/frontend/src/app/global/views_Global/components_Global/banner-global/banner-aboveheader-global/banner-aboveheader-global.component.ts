import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner-aboveheader-global',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './banner-aboveheader-global.component.html',
  styleUrl: './banner-aboveheader-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerAboveheaderGlobalComponent {}
