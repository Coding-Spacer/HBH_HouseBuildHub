import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextseoPageCatalogHouseplansComponent } from './textseo-page-catalog-houseplans.component';

describe('TextseoPageCatalogHouseplansComponent', () => {
  let component: TextseoPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<TextseoPageCatalogHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextseoPageCatalogHouseplansComponent]
    });
    fixture = TestBed.createComponent(TextseoPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
