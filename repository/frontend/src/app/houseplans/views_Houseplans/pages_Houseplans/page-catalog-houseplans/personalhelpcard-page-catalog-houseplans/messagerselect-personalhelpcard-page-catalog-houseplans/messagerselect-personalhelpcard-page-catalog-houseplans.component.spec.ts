import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerselectPersonalhelpcardPageCatalogHouseplansComponent } from './messagerselect-personalhelpcard-page-catalog-houseplans.component';

describe('MessagerselectPersonalhelpcardPageCatalogHouseplansComponent', () => {
  let component: MessagerselectPersonalhelpcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<MessagerselectPersonalhelpcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagerselectPersonalhelpcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagerselectPersonalhelpcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
