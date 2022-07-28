import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { LoadingService } from './loading.service';


@Injectable()
export class ReqloaderInterceptor implements HttpInterceptor {

  constructor(private loading: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loading.nextLoading(true);


    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse)=>{
        return throwError(() => new Error(err.message));
      }),
      finalize(() => this.loading.nextLoading(false))
    )
  }
}
