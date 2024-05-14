import { TestBed } from '@angular/core/testing';

import { HttpDefaultService } from './http-default.service';

describe('HttpDefaultService', () => {
  let service: HttpDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
