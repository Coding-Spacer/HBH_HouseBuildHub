import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCenterHeaderGlobalComponent } from './logo-center-header-global.component';

describe('LogoCenterHeaderGlobalComponent', () => {
  let component: LogoCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<LogoCenterHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCenterHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
