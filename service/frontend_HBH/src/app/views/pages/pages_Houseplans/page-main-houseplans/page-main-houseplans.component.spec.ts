import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainHouseplansComponent } from './page-main-houseplans.component';

describe('PageMainHouseplansComponent', () => {
  let component: PageMainHouseplansComponent;
  let fixture: ComponentFixture<PageMainHouseplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMainHouseplansComponent]
    });
    fixture = TestBed.createComponent(PageMainHouseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
