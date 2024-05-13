import { TestBed } from '@angular/core/testing';

import { ColletionService } from './colletion.service';

describe('ColletionService', () => {
  let service: ColletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
