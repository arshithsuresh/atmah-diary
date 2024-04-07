import { TestBed } from '@angular/core/testing';

import { ReplayKeystrokeService } from './replay-keystroke.service';

describe('ReplayKeystrokeService', () => {
  let service: ReplayKeystrokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplayKeystrokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
