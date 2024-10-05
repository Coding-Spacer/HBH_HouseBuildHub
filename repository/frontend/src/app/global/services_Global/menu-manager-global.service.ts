import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuManagerGlobalService {
  private isMenuVisibleSubject = new BehaviorSubject<boolean>(false);
  isMenuVisible$ = this.isMenuVisibleSubject.asObservable();

  toggleMenuVisibility() {
    const currentValue = this.isMenuVisibleSubject.value;
    this.isMenuVisibleSubject.next(!currentValue);
  }
}
