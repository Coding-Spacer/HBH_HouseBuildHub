import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesTopHeaderGlobalComponent } from './services-top-header-global/services-top-header-global.component'; 
import { SavedTopHeaderGlobalComponent } from './saved-top-header-global/saved-top-header-global.component';
import { CartTopHeaderGlobalComponent } from './cart-top-header-global/cart-top-header-global.component';
import { SettingsTopHeaderGlobalComponent } from './settings-top-header-global/settings-top-header-global.component';
import { MessageTopHeaderGlobalComponent } from './message-top-header-global/message-top-header-global.component';
import { HelpTopHeaderGlobalComponent } from './help-top-header-global/help-top-header-global.component';
import { LogoTopHeaderGlobalComponent } from './logo-top-header-global/logo-top-header-global.component';
import { AccountTopHeaderGlobalComponent } from './account-top-header-global/account-top-header-global.component';
import { SearchTopHeaderGlobalComponent } from './search-top-header-global/search-top-header-global.component';











@Component({
  selector: 'app-top-header-global',
  standalone: true,
  imports: [
    RouterModule,
    ServicesTopHeaderGlobalComponent,
    SavedTopHeaderGlobalComponent,
    CartTopHeaderGlobalComponent,
    SettingsTopHeaderGlobalComponent,
    MessageTopHeaderGlobalComponent,
    HelpTopHeaderGlobalComponent,
    LogoTopHeaderGlobalComponent,
    AccountTopHeaderGlobalComponent,
    SearchTopHeaderGlobalComponent
    
  ],
  templateUrl: './top-header-global.component.html',
  styleUrl: './top-header-global.component.scss'
})
export class TopHeaderGlobalComponent {

}
