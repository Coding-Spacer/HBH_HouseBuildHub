import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-name-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './name-productcard-page-catalog-houseplans.component.html',
  styleUrl: './name-productcard-page-catalog-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameProductcardPageCatalogHouseplansComponent {}
