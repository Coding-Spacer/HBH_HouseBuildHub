import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountPersonalinfoGlobalComponent } from './page-account-personalinfo-global.component';

describe('PageAccountPersonalinfoGlobalComponent', () => {
  let component: PageAccountPersonalinfoGlobalComponent;
  let fixture: ComponentFixture<PageAccountPersonalinfoGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAccountPersonalinfoGlobalComponent]
    });
    fixture = TestBed.createComponent(PageAccountPersonalinfoGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
