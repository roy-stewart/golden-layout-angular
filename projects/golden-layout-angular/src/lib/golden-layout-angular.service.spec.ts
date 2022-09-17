import { TestBed } from '@angular/core/testing';

import { GoldenLayoutAngularService } from './golden-layout-angular.service';

describe('GoldenLayoutAngularService', () => {
  let service: GoldenLayoutAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldenLayoutAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
