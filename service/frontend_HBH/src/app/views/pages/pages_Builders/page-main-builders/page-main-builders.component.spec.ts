import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainBuildersComponent } from './page-main-builders.component';

describe('PageMainBuildersComponent', () => {
  let component: PageMainBuildersComponent;
  let fixture: ComponentFixture<PageMainBuildersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMainBuildersComponent]
    });
    fixture = TestBed.createComponent(PageMainBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
