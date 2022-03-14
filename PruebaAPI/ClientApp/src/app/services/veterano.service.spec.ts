import { TestBed } from '@angular/core/testing';

import { VeteranoService } from './veterano.service';

describe('VeteranoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeteranoService = TestBed.get(VeteranoService);
    expect(service).toBeTruthy();
  });
});
