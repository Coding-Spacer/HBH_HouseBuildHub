import { TestBed } from '@angular/core/testing';

import { CardViewSwitchService } from './card-view-switch.service';

describe('CardViewSwitchService', () => {
  let service: CardViewSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardViewSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
