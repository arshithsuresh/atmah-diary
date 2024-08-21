import { TestBed } from '@angular/core/testing';

import { KeyboardSoundsService } from './keyboard-sounds.service';

describe('KeyboardSoundsService', () => {
  let service: KeyboardSoundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardSoundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
