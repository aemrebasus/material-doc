import { TestBed } from '@angular/core/testing';

import { AeDocService } from './ae-doc.service';

describe('AeDocService', () => {
  let service: AeDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
