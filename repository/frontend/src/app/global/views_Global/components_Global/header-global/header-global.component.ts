import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TopHeaderGlobalComponent } from './top-header-global/top-header-global.component';
import { CenterHeaderGlobalComponent } from './center-header-global/center-header-global.component';
import { BottomHeaderGlobalComponent } from './bottom-header-global/bottom-header-global.component';



@Component({
  selector: 'app-header-global',
  standalone: true,
  imports: [
    TopHeaderGlobalComponent,
    CenterHeaderGlobalComponent,
    BottomHeaderGlobalComponent
  ],
  templateUrl: './header-global.component.html',
  styleUrl: './header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderGlobalComponent {

}
