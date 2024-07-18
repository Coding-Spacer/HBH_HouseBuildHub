import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BasketCenterHeaderGlobalComponent } from './basket-center-header-global/basket-center-header-global.component';
import { LanguageselectionCenterHeaderGlobalComponent } from './languageselection-center-header-global/languageselection-center-header-global.component';
import { LogoCenterHeaderGlobalComponent } from './logo-center-header-global/logo-center-header-global.component';
import { RegistrationCenterHeaderGlobalComponent } from './registration-center-header-global/registration-center-header-global.component';
import { SearchbarCenterHeaderGlobalComponent } from './searchbar-center-header-global/searchbar-center-header-global.component';
import { MessageCenterHeaderGlobalComponent } from './message-center-header-global/message-center-header-global.component';



@Component({
  selector: 'app-center-header-global',
  standalone: true,
  imports: [
    BasketCenterHeaderGlobalComponent,
    LanguageselectionCenterHeaderGlobalComponent,
    LogoCenterHeaderGlobalComponent,
    RegistrationCenterHeaderGlobalComponent,
    SearchbarCenterHeaderGlobalComponent,
    MessageCenterHeaderGlobalComponent

  ],
  templateUrl: './center-header-global.component.html',
  styleUrl: './center-header-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterHeaderGlobalComponent {}
