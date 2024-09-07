import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalManagerGlobalService } from '../../../../services_Global/modal-manager-global.service';


@Component({
  selector: 'app-info-modal-global',
  standalone: true,
  imports: [],
  templateUrl: './info-modal-global.component.html',
  styleUrl: './info-modal-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoModalGlobalComponent {
  constructor(private modalService: ModalManagerGlobalService) {}

  closeModalOnClick() {
    this.modalService.closeModalOnClick();
  }
}
