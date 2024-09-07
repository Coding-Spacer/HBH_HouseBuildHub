import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHelpGlobalComponent } from './page-help-global.component';

describe('PageHelpGlobalComponent', () => {
  let component: PageHelpGlobalComponent;
  let fixture: ComponentFixture<PageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
