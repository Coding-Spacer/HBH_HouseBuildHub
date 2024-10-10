import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTopHeaderGlobalComponent } from './settings-top-header-global.component';

describe('SettingsTopHeaderGlobalComponent', () => {
  let component: SettingsTopHeaderGlobalComponent;
  let fixture: ComponentFixture<SettingsTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
