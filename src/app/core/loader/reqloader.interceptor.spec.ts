import { TestBed } from '@angular/core/testing';

import { ReqloaderInterceptor } from './reqloader.interceptor';

describe('ReqloaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReqloaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReqloaderInterceptor = TestBed.inject(ReqloaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
