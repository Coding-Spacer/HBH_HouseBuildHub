import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../../../global/services_Global/modal-manager-global.service';

@Component({
  selector: 'app-constructionoptions-productcard-page-catalog-houseplans',
  standalone: true,
  imports: [],
  templateUrl:
    './constructionoptions-productcard-page-catalog-houseplans.component.html',
  styleUrl:
    './constructionoptions-productcard-page-catalog-houseplans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConstructionoptionsProductcardPageCatalogHouseplansComponent {
  constructor(private modalService: ModalManagerGlobalService) {}

  openModal() {
    const modalId = 'costModal'; // Задайте идентификатор модального окна
    this.modalService.openModal(modalId); // Откроет модальное окно с заданным идентификатором
  }
}

