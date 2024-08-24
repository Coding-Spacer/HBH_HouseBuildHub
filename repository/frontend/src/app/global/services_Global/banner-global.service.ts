import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerGlobalService {
  private bannerSubject = new BehaviorSubject<{
    isVisible: boolean;
   
  } | null>(null);
  banner$ = this.bannerSubject.asObservable();

  showBanner() {
    this.bannerSubject.next({ isVisible: true });
  }

  hideBanner() {
    this.bannerSubject.next({ isVisible: false });
  }
}
