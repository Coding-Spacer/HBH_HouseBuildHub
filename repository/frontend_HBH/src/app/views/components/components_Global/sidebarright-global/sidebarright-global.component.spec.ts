import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrightGlobalComponent } from './sidebarright-global.component';

describe('SidebarrightGlobalComponent', () => {
  let component: SidebarrightGlobalComponent;
  let fixture: ComponentFixture<SidebarrightGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarrightGlobalComponent]
    });
    fixture = TestBed.createComponent(SidebarrightGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
