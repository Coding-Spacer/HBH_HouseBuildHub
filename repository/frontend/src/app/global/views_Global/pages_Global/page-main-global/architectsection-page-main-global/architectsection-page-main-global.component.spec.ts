import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsectionPageMainGlobalComponent } from './architectsection-page-main-global.component';

describe('ArchitectsectionPageMainGlobalComponent', () => {
  let component: ArchitectsectionPageMainGlobalComponent;
  let fixture: ComponentFixture<ArchitectsectionPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectsectionPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectsectionPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
