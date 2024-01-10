import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationGlobalComponent } from './pagination-global.component';

describe('PaginationGlobalComponent', () => {
  let component: PaginationGlobalComponent;
  let fixture: ComponentFixture<PaginationGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationGlobalComponent]
    });
    fixture = TestBed.createComponent(PaginationGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
