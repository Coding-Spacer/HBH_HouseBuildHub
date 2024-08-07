import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterHeaderGlobalComponent } from './center-header-global.component';

describe('CenterHeaderGlobalComponent', () => {
  let component: CenterHeaderGlobalComponent;
  let fixture: ComponentFixture<CenterHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
