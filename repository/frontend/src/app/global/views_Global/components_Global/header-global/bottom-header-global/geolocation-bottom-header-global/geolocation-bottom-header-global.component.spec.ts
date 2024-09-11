import { Component, OnInit, signal } from '@angular/core';
import { RegionSelectGlobalService } from '../../../../../services_Global/region-select-global.service';

@Component({
  selector: 'app-geolocation-bottom-header-global',
  standalone: true,
  templateUrl: './geolocation-bottom-header-global.component.html',
  styleUrls: ['./geolocation-bottom-header-global.component.scss'],
})
export class GeolocationBottomHeaderGlobalComponent implements OnInit {
  // Используем обычный массив, так как signal может быть не нужен
  regions: string[] = ['Los Angeles', 'New York', 'Chicago', 'Houston'];
  selectedRegion = signal<string | null>(null);

  constructor(private regionService: RegionSelectGlobalService) {}

  ngOnInit() {
    // Подписка на сервис для получения выбранного региона
    this.regionService.selectedRegion$.subscribe((region) => {
      this.selectedRegion.set(region);
    });
  }

  onRegionSelect(event: Event) {
    const selectedRegion = (event.target as HTMLSelectElement).value;
    this.regionService.setSelectedRegion(selectedRegion);
  }
}
