import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTopHeaderGlobalComponent } from './saved-top-header-global.component';

describe('SavedTopHeaderGlobalComponent', () => {
  let component: SavedTopHeaderGlobalComponent;
  let fixture: ComponentFixture<SavedTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
