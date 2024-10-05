import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesTopHeaderGlobalComponent } from './services-top-header-global/services-top-header-global.component';





@Component({
  selector: 'app-top-header-global',
  standalone: true,
  imports: [
    RouterModule,
    ServicesTopHeaderGlobalComponent
  ],
  templateUrl: './top-header-global.component.html',
  styleUrl: './top-header-global.component.scss'
})
export class TopHeaderGlobalComponent {

}
