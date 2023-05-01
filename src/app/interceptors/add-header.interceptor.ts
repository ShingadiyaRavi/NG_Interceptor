import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  // This is used for the some data add to the header part of request..

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headerReq = request.clone({
      setHeaders:{
        'name': 'shingadiya Ravi'
      }
    });
    return next.handle(headerReq);
  }
}
