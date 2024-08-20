import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersectionPageMainGlobalComponent } from './suppliersection-page-main-global.component';

describe('SuppliersectionPageMainGlobalComponent', () => {
  let component: SuppliersectionPageMainGlobalComponent;
  let fixture: ComponentFixture<SuppliersectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuppliersectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
