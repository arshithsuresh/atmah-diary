import { TestBed } from '@angular/core/testing';

import { PhysicalKeyboardListenerService } from './physical-keyboard-listener.service';

describe('PhysicalKeyboardListenerService', () => {
  let service: PhysicalKeyboardListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicalKeyboardListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
