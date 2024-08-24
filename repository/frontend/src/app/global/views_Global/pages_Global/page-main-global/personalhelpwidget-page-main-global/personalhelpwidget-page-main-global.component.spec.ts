import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalhelpwidgetPageMainGlobalComponent } from './personalhelpwidget-page-main-global.component';

describe('PersonalhelpwidgetPageMainGlobalComponent', () => {
  let component: PersonalhelpwidgetPageMainGlobalComponent;
  let fixture: ComponentFixture<PersonalhelpwidgetPageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalhelpwidgetPageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalhelpwidgetPageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
