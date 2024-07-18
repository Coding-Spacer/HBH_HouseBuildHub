import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationstatusProductcardPageCatalogHouseplansComponent } from './verificationstatus-productcard-page-catalog-houseplans.component';

describe('VerificationstatusProductcardPageCatalogHouseplansComponent', () => {
  let component: VerificationstatusProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<VerificationstatusProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationstatusProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificationstatusProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
