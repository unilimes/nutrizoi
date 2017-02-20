import { TestBed, inject } from '@angular/core/testing';
import { ChangeInfoService } from './change-info.service';

describe('ChangeInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeInfoService]
    });
  });

  it('should ...', inject([ChangeInfoService], (service: ChangeInfoService) => {
    expect(service).toBeTruthy();
  }));
});
