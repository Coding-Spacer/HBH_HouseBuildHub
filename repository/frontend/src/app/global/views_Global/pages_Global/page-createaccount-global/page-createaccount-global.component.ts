import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtoncontinueCreateaccountModalGlobalComponent } from './buttoncontinue-createaccount-modal-global/buttoncontinue-createaccount-modal-global.component';
import { EmailCreateaccountModalGlobalComponent } from './email-createaccount-modal-global/email-createaccount-modal-global.component';
import { ErnCreateaccountModalGlobalComponent } from './ern-createaccount-modal-global/ern-createaccount-modal-global.component';
import { NameCreateaccountModalGlobalComponent } from './name-createaccount-modal-global/name-createaccount-modal-global.component';
import { PasswordCreateaccountModalGlobalComponent } from './password-createaccount-modal-global/password-createaccount-modal-global.component';
import { SelectCreateaccountModalGlobalComponent } from './select-createaccount-modal-global/select-createaccount-modal-global.component';
import { SocialaccountsCreateaccountModalGlobalComponent } from './socialaccounts-createaccount-modal-global/socialaccounts-createaccount-modal-global.component';
import { TermsCreateaccountModalGlobalComponent } from './terms-createaccount-modal-global/terms-createaccount-modal-global.component';


@Component({
  selector: 'app-page-createaccount-global',
  standalone: true,
  imports: [
    RouterModule,
    ButtoncontinueCreateaccountModalGlobalComponent,
    EmailCreateaccountModalGlobalComponent,
    ErnCreateaccountModalGlobalComponent,
    NameCreateaccountModalGlobalComponent,
    PasswordCreateaccountModalGlobalComponent,
    SelectCreateaccountModalGlobalComponent,
    SocialaccountsCreateaccountModalGlobalComponent,
    TermsCreateaccountModalGlobalComponent,




  ],
  templateUrl: './page-createaccount-global.component.html',
  styleUrl: './page-createaccount-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCreateaccountGlobalComponent {}
