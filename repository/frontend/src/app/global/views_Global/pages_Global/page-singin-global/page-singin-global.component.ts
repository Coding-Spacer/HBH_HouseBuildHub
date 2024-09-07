import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdditionalinfoSinginModalGlobalComponent } from './additionalinfo-singin-modal-global/additionalinfo-singin-modal-global.component';
import { ButtoncloseSinginModalGlobalComponent } from './buttonclose-singin-modal-global/buttonclose-singin-modal-global.component';
import { ButtonsinginSinginModalGlobalComponent } from './buttonsingin-singin-modal-global/buttonsingin-singin-modal-global.component';
import { EmailSinginModalGlobalComponent } from './email-singin-modal-global/email-singin-modal-global.component';
import { NameSinginModalGlobalComponent } from './name-singin-modal-global/name-singin-modal-global.component';
import { PasswordSinginModalGlobalComponent } from './password-singin-modal-global/password-singin-modal-global.component';
import { SelectSinginModalGlobalComponent } from './select-singin-modal-global/select-singin-modal-global.component';
import { SocialaccoutnsSinginModalGlobalComponent } from './socialaccoutns-singin-modal-global/socialaccoutns-singin-modal-global.component';
import { TermsSinginModalGlobalComponent } from './terms-singin-modal-global/terms-singin-modal-global.component';



@Component({
  selector: 'app-page-singin-global',
  standalone: true,
  imports: [
    RouterModule,
    AdditionalinfoSinginModalGlobalComponent,
    ButtoncloseSinginModalGlobalComponent,
    ButtonsinginSinginModalGlobalComponent,
    EmailSinginModalGlobalComponent,
    NameSinginModalGlobalComponent,
    PasswordSinginModalGlobalComponent,   
    SelectSinginModalGlobalComponent,
    SocialaccoutnsSinginModalGlobalComponent,
    TermsSinginModalGlobalComponent

  ],
  templateUrl: './page-singin-global.component.html',
  styleUrl: './page-singin-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSinginGlobalComponent {}
