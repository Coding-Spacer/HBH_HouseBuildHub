import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTopHeaderGlobalComponent } from './help-top-header-global.component';

describe('HelpTopHeaderGlobalComponent', () => {
  let component: HelpTopHeaderGlobalComponent;
  let fixture: ComponentFixture<HelpTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
