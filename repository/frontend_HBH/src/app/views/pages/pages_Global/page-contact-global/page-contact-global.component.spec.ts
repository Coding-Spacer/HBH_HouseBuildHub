import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactGlobalComponent } from './page-contact-global.component';

describe('PageContactGlobalComponent', () => {
  let component: PageContactGlobalComponent;
  let fixture: ComponentFixture<PageContactGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContactGlobalComponent]
    });
    fixture = TestBed.createComponent(PageContactGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
