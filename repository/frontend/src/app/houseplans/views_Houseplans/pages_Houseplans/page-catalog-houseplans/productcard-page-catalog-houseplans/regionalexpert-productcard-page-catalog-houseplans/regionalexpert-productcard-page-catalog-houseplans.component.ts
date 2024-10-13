import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';


@Component({
  selector: 'app-regionalexpert-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl: 
    './regionalexpert-productcard-page-catalog-houseplans.component.html',
  styleUrl:
    './regionalexpert-productcard-page-catalog-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionalexpertProductcardPageCatalogHouseplansComponent {
  constructor(public modalService: ModalManagerGlobalService) {}

  openModalOnClick() {
    const modalId = 'infoModal'; // Задайте идентификатор модального окна
    this.modalService.openModalOnClick(modalId); // Откроет модальное окно с заданным идентификатором
  }
}
