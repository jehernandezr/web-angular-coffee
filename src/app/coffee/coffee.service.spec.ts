/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Service: Coffee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeService, provideHttpClientTesting()]
    });
  });

  it('should ...', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
