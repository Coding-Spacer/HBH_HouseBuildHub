import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageselectGlobalComponent } from './languageselect-global.component';

describe('LanguageselectGlobalComponent', () => {
  let component: LanguageselectGlobalComponent;
  let fixture: ComponentFixture<LanguageselectGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageselectGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageselectGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
