import { TestBed, inject } from '@angular/core/testing';
import { IsMobileService } from './is-mobile.service';

describe('IsMobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsMobileService]
    });
  });

  it('should ...', inject([IsMobileService], (service: IsMobileService) => {
    expect(service).toBeTruthy();
  }));
});
