import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBottomHeaderGlobalComponent } from './saved-bottom-header-global.component';

describe('SavedBottomHeaderGlobalComponent', () => {
  let component: SavedBottomHeaderGlobalComponent;
  let fixture: ComponentFixture<SavedBottomHeaderGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedBottomHeaderGlobalComponent]
    });
    fixture = TestBed.createComponent(SavedBottomHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
