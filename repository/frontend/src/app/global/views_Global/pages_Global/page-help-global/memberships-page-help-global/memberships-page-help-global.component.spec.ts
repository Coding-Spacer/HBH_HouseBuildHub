import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipsPageHelpGlobalComponent } from './memberships-page-help-global.component';

describe('MembershipsPageHelpGlobalComponent', () => {
  let component: MembershipsPageHelpGlobalComponent;
  let fixture: ComponentFixture<MembershipsPageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipsPageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipsPageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
