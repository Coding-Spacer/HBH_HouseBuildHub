import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageselectionCenterHeaderGlobalComponent } from './languageselection-center-header-global.component';

describe('LanguageselectionCenterHeaderGlobalComponent', () => {
  let component: LanguageselectionCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<LanguageselectionCenterHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageselectionCenterHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(LanguageselectionCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
