import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSelectFooterGlobalComponent } from './share-select-footer-global.component';

describe('ShareSelectFooterGlobalComponent', () => {
  let component: ShareSelectFooterGlobalComponent;
  let fixture: ComponentFixture<ShareSelectFooterGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareSelectFooterGlobalComponent]
    });
    fixture = TestBed.createComponent(ShareSelectFooterGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
