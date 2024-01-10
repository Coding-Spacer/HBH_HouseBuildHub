import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGlobalComponent } from './saved-global.component';

describe('SavedGlobalComponent', () => {
  let component: SavedGlobalComponent;
  let fixture: ComponentFixture<SavedGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedGlobalComponent]
    });
    fixture = TestBed.createComponent(SavedGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
