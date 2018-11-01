import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotificationService} from '../services/notification.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

    constructor(private notificationService: NotificationService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((errorResponse: HttpErrorResponse) => {
                this.notificationService.notify(errorResponse.message);
                return throwError(errorResponse);
            })
        );
    }
}
