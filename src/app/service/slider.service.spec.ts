import { TestBed, inject } from '@angular/core/testing';
import { SliderService } from './slider.service';

describe('SliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliderService]
    });
  });

  it('should ...', inject([SliderService], (service: SliderService) => {
    expect(service).toBeTruthy();
  }));
});
