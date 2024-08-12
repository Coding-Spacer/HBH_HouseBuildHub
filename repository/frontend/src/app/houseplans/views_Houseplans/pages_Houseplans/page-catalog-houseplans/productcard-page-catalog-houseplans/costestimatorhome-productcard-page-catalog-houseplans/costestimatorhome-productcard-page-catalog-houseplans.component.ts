import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';

@Component({
  selector: 'app-costestimatorhome-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl:
    './costestimatorhome-productcard-page-catalog-houseplans.component.html',
  styleUrl:
    './costestimatorhome-productcard-page-catalog-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostestimatorhomeProductcardPageCatalogHouseplansComponent {
  constructor(private modalService: ModalManagerGlobalService) {}

  openModalOnClick() {     
   
    const modalId = 'infoModal'; // Задайте идентификатор модального окна
    this.modalService.openModalOnClick(modalId); // Откроет модальное окно с заданным идентификатором
  }
}
