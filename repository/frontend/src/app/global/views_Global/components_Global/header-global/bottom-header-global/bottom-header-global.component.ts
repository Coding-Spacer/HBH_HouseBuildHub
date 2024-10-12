import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GeolocationBottomHeaderGlobalComponent } from './geolocation-bottom-header-global/geolocation-bottom-header-global.component';






@Component({
  selector: 'app-bottom-header-global',
  standalone: true,
  imports: [    
    GeolocationBottomHeaderGlobalComponent,  
   
  ],
  templateUrl: './bottom-header-global.component.html',
  styleUrl: './bottom-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomHeaderGlobalComponent {}
