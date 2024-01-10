import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.css']
})
export class FooterGlobalComponent {
  currentYear: number = new Date().getFullYear();
}
