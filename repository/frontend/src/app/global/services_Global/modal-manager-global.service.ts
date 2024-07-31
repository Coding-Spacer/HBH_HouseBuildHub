import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalManagerGlobalService {

  private modalSubject = new BehaviorSubject<string | null>(null);

  // Observable to subscribe to modal changes
  modalState$ = this.modalSubject.asObservable();

  // Method to open a modal
  openModal(modalId: string) {
    this.modalSubject.next(modalId);
  }

  // Method to close the modal
  closeModal() {
    this.modalSubject.next(null);
  }
}
