import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AdditionalinfoSinginModalGlobalComponent } from './additionalinfo-singin-modal-global/additionalinfo-singin-modal-global.component';
import { ButtoncloseSinginModalGlobalComponent } from './buttonclose-singin-modal-global/buttonclose-singin-modal-global.component';
import { ButtonsinginSinginModalGlobalComponent } from './buttonsingin-singin-modal-global/buttonsingin-singin-modal-global.component';
import { EmailSinginModalGlobalComponent } from './email-singin-modal-global/email-singin-modal-global.component';
import { NameSinginModalGlobalComponent } from './name-singin-modal-global/name-singin-modal-global.component';
import { PasswordSinginModalGlobalComponent } from './password-singin-modal-global/password-singin-modal-global.component';
import { SelectSinginModalGlobalComponent } from './select-singin-modal-global/select-singin-modal-global.component';
import { SocialaccoutnsSinginModalGlobalComponent } from './socialaccoutns-singin-modal-global/socialaccoutns-singin-modal-global.component';


@Component({
  selector: 'app-singin-modal-global',
  standalone: true,
  imports: [
    AdditionalinfoSinginModalGlobalComponent,
    ButtoncloseSinginModalGlobalComponent,
    ButtonsinginSinginModalGlobalComponent,
    EmailSinginModalGlobalComponent,
    NameSinginModalGlobalComponent,
    PasswordSinginModalGlobalComponent,
    SelectSinginModalGlobalComponent,
    SocialaccoutnsSinginModalGlobalComponent
  ],
  templateUrl: './singin-modal-global.component.html',
  styleUrl: './singin-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinginModalGlobalComponent {}
