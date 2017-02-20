import { TestBed, inject } from '@angular/core/testing';
import { GreenScaleService } from './green-scale.service';

describe('GreenScaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreenScaleService]
    });
  });

  it('should ...', inject([GreenScaleService], (service: GreenScaleService) => {
    expect(service).toBeTruthy();
  }));
});
