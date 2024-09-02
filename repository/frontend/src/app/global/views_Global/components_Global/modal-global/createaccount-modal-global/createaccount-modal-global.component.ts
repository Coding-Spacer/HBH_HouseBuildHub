import { Component, ChangeDetectionStrategy } from '@angular/core';


/* import Components */
import { AdditioninfoCreateaccountModalGlobalComponent } from './additioninfo-createaccount-modal-global/additioninfo-createaccount-modal-global.component';
import { ButtoncloseCreateaccountModalGlobalComponent } from './buttonclose-createaccount-modal-global/buttonclose-createaccount-modal-global.component';
import { ButtoncontinueCreateaccountModalGlobalComponent } from './buttoncontinue-createaccount-modal-global/buttoncontinue-createaccount-modal-global.component';
import { EmailCreateaccountModalGlobalComponent } from './email-createaccount-modal-global/email-createaccount-modal-global.component';
import { ErnCreateaccountModalGlobalComponent } from './ern-createaccount-modal-global/ern-createaccount-modal-global.component';
import { NameCreateaccountModalGlobalComponent } from './name-createaccount-modal-global/name-createaccount-modal-global.component';
import { PasswordCreateaccountModalGlobalComponent } from './password-createaccount-modal-global/password-createaccount-modal-global.component';
import { SelectCreateaccountModalGlobalComponent } from './select-createaccount-modal-global/select-createaccount-modal-global.component';
import { SocialaccountsCreateaccountModalGlobalComponent } from './socialaccounts-createaccount-modal-global/socialaccounts-createaccount-modal-global.component';
import { TermsCreateaccountModalGlobalComponent } from './terms-createaccount-modal-global/terms-createaccount-modal-global.component';

@Component({
  selector: 'app-createaccount-modal-global',
  standalone: true,
  imports: [
    AdditioninfoCreateaccountModalGlobalComponent,
    ButtoncloseCreateaccountModalGlobalComponent,
    ButtoncontinueCreateaccountModalGlobalComponent,
    EmailCreateaccountModalGlobalComponent,
    ErnCreateaccountModalGlobalComponent,
    NameCreateaccountModalGlobalComponent,
    PasswordCreateaccountModalGlobalComponent,
    SelectCreateaccountModalGlobalComponent,
    SocialaccountsCreateaccountModalGlobalComponent,
    TermsCreateaccountModalGlobalComponent,
  ],
  templateUrl: './createaccount-modal-global.component.html',
  styleUrl: './createaccount-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateaccountModalGlobalComponent {}
