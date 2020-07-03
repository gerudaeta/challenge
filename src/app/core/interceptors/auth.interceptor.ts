import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url) {
      return next.handle(request);
    }

    const token = this.authService.token;
    if (!!token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(request);
  }
}
