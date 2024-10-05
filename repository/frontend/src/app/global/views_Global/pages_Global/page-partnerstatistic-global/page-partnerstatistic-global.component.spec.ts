import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartnerstatisticGlobalComponent } from './page-partnerstatistic-global.component';

describe('PagePartnerstatisticGlobalComponent', () => {
  let component: PagePartnerstatisticGlobalComponent;
  let fixture: ComponentFixture<PagePartnerstatisticGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePartnerstatisticGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePartnerstatisticGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
