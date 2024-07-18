import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightinfoProductcardPageCatalogHouseplansComponent } from './copyrightinfo-productcard-page-catalog-houseplans.component';

describe('CopyrightinfoProductcardPageCatalogHouseplansComponent', () => {
  let component: CopyrightinfoProductcardPageCatalogHouseplansComponent;
  let fixture: ComponentFixture<CopyrightinfoProductcardPageCatalogHouseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightinfoProductcardPageCatalogHouseplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyrightinfoProductcardPageCatalogHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
