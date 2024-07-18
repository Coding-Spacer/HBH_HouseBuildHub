import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSavedGlobalComponent } from './page-saved-global.component';

describe('PageSavedGlobalComponent', () => {
  let component: PageSavedGlobalComponent;
  let fixture: ComponentFixture<PageSavedGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSavedGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSavedGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
