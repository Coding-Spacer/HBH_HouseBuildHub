import { Component } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';

@Component({
  selector: 'app-onsale-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl: './onsale-productcard-page-catalog-houseplans.component.html',
  styleUrl: './onsale-productcard-page-catalog-houseplans.component.scss',
})
export class OnsaleProductcardPageCatalogHouseplansComponent {
  constructor(private modalService: ModalManagerGlobalService) {}

  openModalOnClick() {
    const modalId = 'infoModal'; // Задайте идентификатор модального окна
    this.modalService.openModalOnClick(modalId); // Откроет модальное окно с заданным идентификатором
  }
}
