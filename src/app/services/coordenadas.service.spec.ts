import { TestBed, inject } from '@angular/core/testing';

import { CoordenadasService } from './coordenadas.service';

describe('CoordenadasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordenadasService]
    });
  });

  it('should be created', inject([CoordenadasService], (service: CoordenadasService) => {
    expect(service).toBeTruthy();
  }));
});
