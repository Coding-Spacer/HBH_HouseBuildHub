import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionselectGlobalComponent } from './regionselect-global.component';

describe('RegionselectGlobalComponent', () => {
  let component: RegionselectGlobalComponent;
  let fixture: ComponentFixture<RegionselectGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionselectGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionselectGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
