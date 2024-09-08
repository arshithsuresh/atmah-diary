import { TestBed } from '@angular/core/testing';

import { SharedActionsService } from './shared-actions.service';

describe('SharedActionsService', () => {
  let service: SharedActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
