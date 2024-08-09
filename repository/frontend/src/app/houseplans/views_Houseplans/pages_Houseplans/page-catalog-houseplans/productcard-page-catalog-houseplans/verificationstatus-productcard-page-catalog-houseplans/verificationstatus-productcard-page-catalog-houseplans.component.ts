import { Component } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';

@Component({
  selector: 'app-verificationstatus-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl:
    './verificationstatus-productcard-page-catalog-houseplans.component.html',
  styleUrl:
    './verificationstatus-productcard-page-catalog-houseplans.component.scss',
})
export class VerificationstatusProductcardPageCatalogHouseplansComponent {
  constructor(private modalService: ModalManagerGlobalService) {}

  openModal() {
    const modalId = 'costModal'; // Задайте идентификатор модального окна
    this.modalService.openModal(modalId); // Откроет модальное окно с заданным идентификатором
  }
}
