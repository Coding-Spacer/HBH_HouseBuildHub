import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegionselectGlobalComponent } from '../../regionselect-global/regionselect-global.component';





@Component({
  selector: 'app-center-header-global',
  standalone: true,
  imports: [
    RouterModule,    
    RegionselectGlobalComponent
  ],
  templateUrl: './center-header-global.component.html',
  styleUrl: './center-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterHeaderGlobalComponent {}
