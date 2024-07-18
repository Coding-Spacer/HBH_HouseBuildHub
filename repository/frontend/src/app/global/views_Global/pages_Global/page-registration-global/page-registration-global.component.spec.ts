import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistrationGlobalComponent } from './page-registration-global.component';

describe('PageRegistrationGlobalComponent', () => {
  let component: PageRegistrationGlobalComponent;
  let fixture: ComponentFixture<PageRegistrationGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRegistrationGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageRegistrationGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
