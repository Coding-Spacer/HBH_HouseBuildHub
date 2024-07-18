import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardArchitectorsComponent } from './page-card-architectors.component';

describe('PageCardArchitectorsComponent', () => {
  let component: PageCardArchitectorsComponent;
  let fixture: ComponentFixture<PageCardArchitectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCardArchitectorsComponent]
    });
    fixture = TestBed.createComponent(PageCardArchitectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
