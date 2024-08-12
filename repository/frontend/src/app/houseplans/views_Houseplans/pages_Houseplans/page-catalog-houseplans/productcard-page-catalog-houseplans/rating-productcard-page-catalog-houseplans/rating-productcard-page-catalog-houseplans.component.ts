import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';

@Component({
  selector: 'app-rating-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl: './rating-productcard-page-catalog-houseplans.component.html',
  styleUrls: ['./rating-productcard-page-catalog-houseplans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingProductcardPageCatalogHouseplansComponent {
  constructor(public modalService: ModalManagerGlobalService) {}

  // Открыть модальное окно при наведении
  openModalOnHover() {
    const modalId = 'ratingModal'; // Уникальный идентификатор для модального окна
    this.modalService.openModalOnHover(modalId);
  }

  // Закрыть модальное окно при уходе мыши
  closeModalOnLeave() {
    this.modalService.closeModalOnLeave();
  }
}
