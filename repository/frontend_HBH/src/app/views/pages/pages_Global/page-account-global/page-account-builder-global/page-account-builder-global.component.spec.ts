import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountBuilderGlobalComponent } from './page-account-builder-global.component';

describe('PageAccountBuilderGlobalComponent', () => {
  let component: PageAccountBuilderGlobalComponent;
  let fixture: ComponentFixture<PageAccountBuilderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAccountBuilderGlobalComponent]
    });
    fixture = TestBed.createComponent(PageAccountBuilderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
