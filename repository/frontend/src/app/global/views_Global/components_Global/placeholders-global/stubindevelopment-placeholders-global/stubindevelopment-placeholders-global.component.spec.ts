import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubindevelopmentPlaceholdersGlobalComponent } from './stubindevelopment-placeholders-global.component';

describe('StubindevelopmentPlaceholdersGlobalComponent', () => {
  let component: StubindevelopmentPlaceholdersGlobalComponent;
  let fixture: ComponentFixture<StubindevelopmentPlaceholdersGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StubindevelopmentPlaceholdersGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StubindevelopmentPlaceholdersGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
