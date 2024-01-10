import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGlobalComponent } from './footer-global.component';

describe('FooterGlobalComponent', () => {
  let component: FooterGlobalComponent;
  let fixture: ComponentFixture<FooterGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterGlobalComponent]
    });
    fixture = TestBed.createComponent(FooterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
