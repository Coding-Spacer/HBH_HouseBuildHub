import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrifabhousePartnershipGlobalComponent } from './page-prifabhouse-partnership-global.component';

describe('PagePrifabhousePartnershipGlobalComponent', () => {
  let component: PagePrifabhousePartnershipGlobalComponent;
  let fixture: ComponentFixture<PagePrifabhousePartnershipGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePrifabhousePartnershipGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePrifabhousePartnershipGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
