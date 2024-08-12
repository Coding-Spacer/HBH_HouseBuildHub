import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalManagerGlobalService {
  private currentModalId: string | null = null;
  private modalSubject = new BehaviorSubject<{
    modalId: string | null;
    interactionType: 'click' | 'hover' | null;
  }>({
    modalId: null,
    interactionType: null,
  });

  // Observable to subscribe to modal changes
  modalState$ = this.modalSubject.asObservable();

  // Method to open a modal on click
  openModalOnClick(modalId: string) {  
    this.modalSubject.next({ modalId, interactionType: 'click' });    
  }

   closeModalOnClick() {    
    this.modalSubject.next({ modalId: null, interactionType: 'click' });
  }

  openModalOnHover(modalId: string) {    
    this.modalSubject.next({ modalId, interactionType: 'hover' });
  }
  

  closeModalOnLeave() {    
    this.modalSubject.next({ modalId: null, interactionType: 'hover' });
  }
}
