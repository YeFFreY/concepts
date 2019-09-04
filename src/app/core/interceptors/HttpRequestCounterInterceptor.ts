import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SpinnerService} from '../spinner/spinner.service';
import {finalize, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpRequestCounterInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.inc();
    return next.handle(req)

      .pipe(tap(
        event => console.log(event),
        error => console.log(error)
        ), finalize(() => {
          this.spinnerService.dec();
        })
      );
  }

}
