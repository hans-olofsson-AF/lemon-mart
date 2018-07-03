import { TestBed, inject } from '@angular/core/testing';

import { KontaktpersonService } from './kontaktperson.service';

describe('KontaktpersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KontaktpersonService]
    });
  });

  it('should be created', inject([KontaktpersonService], (service: KontaktpersonService) => {
    expect(service).toBeTruthy();
  }));
});
