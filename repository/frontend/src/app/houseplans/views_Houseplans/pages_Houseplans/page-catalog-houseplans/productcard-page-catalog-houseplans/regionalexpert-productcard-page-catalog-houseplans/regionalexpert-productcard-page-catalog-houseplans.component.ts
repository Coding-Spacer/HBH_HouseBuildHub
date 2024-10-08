import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';
import { GeolocationBottomHeaderGlobalComponent } from "../../../../../../global/views_Global/components_Global/header-global/bottom-header-global/geolocation-bottom-header-global/geolocation-bottom-header-global.component";

@Component({
  selector: 'app-regionalexpert-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [GeolocationBottomHeaderGlobalComponent],
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
