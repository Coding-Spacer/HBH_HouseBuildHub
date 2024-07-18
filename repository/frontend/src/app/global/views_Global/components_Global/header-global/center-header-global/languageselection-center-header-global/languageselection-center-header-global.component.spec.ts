import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageselectionCenterHeaderGlobalComponent } from './languageselection-center-header-global.component';

describe('LanguageselectionCenterHeaderGlobalComponent', () => {
  let component: LanguageselectionCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<LanguageselectionCenterHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageselectionCenterHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageselectionCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
