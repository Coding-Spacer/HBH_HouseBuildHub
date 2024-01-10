import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchGlobalComponent } from './input-search-global.component';

describe('InputSearchGlobalComponent', () => {
  let component: InputSearchGlobalComponent;
  let fixture: ComponentFixture<InputSearchGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSearchGlobalComponent]
    });
    fixture = TestBed.createComponent(InputSearchGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
