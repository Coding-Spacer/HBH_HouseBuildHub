import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingelsePageHelpGlobalComponent } from './somethingelse-page-help-global.component';

describe('SomethingelsePageHelpGlobalComponent', () => {
  let component: SomethingelsePageHelpGlobalComponent;
  let fixture: ComponentFixture<SomethingelsePageHelpGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomethingelsePageHelpGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomethingelsePageHelpGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
