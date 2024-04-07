import { TestBed } from '@angular/core/testing';

import { KeystrokeRecorderService } from './keystroke-recorder.service';

describe('KeystrokeRecorderService', () => {
  let service: KeystrokeRecorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeystrokeRecorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
