import { TestBed } from '@angular/core/testing';

import { VirtualKeyboardListenerService } from './virtual-keyboard-listener.service';

describe('VirtualKeyboardListenerService', () => {
  let service: VirtualKeyboardListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualKeyboardListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
