import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-banner-page-catalog-houseplans',
  templateUrl: './banner-page-catalog-houseplans.component.html',
  styleUrls: ['./banner-page-catalog-houseplans.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, display: 'none' })), // Добавлено свойство display
      transition('visible => hidden', animate('1500ms ease-out')),
      transition('hidden => visible', animate('1500ms ease-in')),
    ]),
  ],
})
export class BannerPageCatalogHouseplansComponent implements OnInit {
  showPhotoSection = true;

  ngOnInit() {
    // Задержка в 20 секунд перед скрытием секции с фото
    setTimeout(() => {
      this.hidePhotoSection();
    }, 20000);
  }

  hidePhotoSection() {
    this.showPhotoSection = false;
  }

  animationDone(event: AnimationEvent) {
    // Обработка события завершения анимации
    if (!this.showPhotoSection) {
      // Сделайте что-то, когда анимация завершена и showPhotoSection равно false

    }
  }
}
