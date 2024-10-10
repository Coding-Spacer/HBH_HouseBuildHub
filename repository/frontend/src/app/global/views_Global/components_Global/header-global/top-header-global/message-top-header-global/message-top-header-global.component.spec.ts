import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTopHeaderGlobalComponent } from './message-top-header-global.component';

describe('MessageTopHeaderGlobalComponent', () => {
  let component: MessageTopHeaderGlobalComponent;
  let fixture: ComponentFixture<MessageTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
