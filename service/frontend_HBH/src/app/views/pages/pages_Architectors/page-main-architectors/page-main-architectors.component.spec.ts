import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainArchitectorsComponent } from './page-main-architectors.component';

describe('PageMainArchitectorsComponent', () => {
  let component: PageMainArchitectorsComponent;
  let fixture: ComponentFixture<PageMainArchitectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMainArchitectorsComponent]
    });
    fixture = TestBed.createComponent(PageMainArchitectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
