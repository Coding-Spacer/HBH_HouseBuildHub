import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrolltotop-global',
  templateUrl: './scrolltotop-global.component.html',
  styleUrls: ['./scrolltotop-global.component.css']
})

export class ScrolltotopGlobalComponent {

showScrollButton = false;

scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

@HostListener('window:scroll', [])
checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.showScrollButton = scrollPosition > 300;
  }
}
