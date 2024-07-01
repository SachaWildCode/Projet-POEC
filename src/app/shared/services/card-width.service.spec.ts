import { TestBed } from '@angular/core/testing';

import { CardWidthService } from './card-width.service';

describe('CardWidthService', () => {
  let service: CardWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
