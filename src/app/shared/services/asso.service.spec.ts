import { TestBed } from '@angular/core/testing';

import { AssoService } from './asso.service';

describe('AssoService', () => {
  let service: AssoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
