import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCenterHeaderGlobalComponent } from './message-center-header-global.component';

describe('MessageCenterHeaderGlobalComponent', () => {
  let component: MessageCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<MessageCenterHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageCenterHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
