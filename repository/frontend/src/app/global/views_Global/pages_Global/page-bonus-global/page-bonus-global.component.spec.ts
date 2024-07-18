import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBonusGlobalComponent } from './page-bonus-global.component';

describe('PageBonusGlobalComponent', () => {
  let component: PageBonusGlobalComponent;
  let fixture: ComponentFixture<PageBonusGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBonusGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBonusGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
