import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageselectionCenterHeaderGlobalComponent } from './languageselection-center-header-global/languageselection-center-header-global.component';




@Component({
  selector: 'app-center-header-global',
  standalone: true,
  imports: [
    RouterModule,    
    LanguageselectionCenterHeaderGlobalComponent,    
   

  ],
  templateUrl: './center-header-global.component.html',
  styleUrl: './center-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterHeaderGlobalComponent {}
