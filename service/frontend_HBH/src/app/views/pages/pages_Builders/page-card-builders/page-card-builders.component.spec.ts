import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardBuildersComponent } from './page-card-builders.component';

describe('PageCardBuildersComponent', () => {
  let component: PageCardBuildersComponent;
  let fixture: ComponentFixture<PageCardBuildersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCardBuildersComponent]
    });
    fixture = TestBed.createComponent(PageCardBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
