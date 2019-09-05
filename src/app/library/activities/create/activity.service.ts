import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../../../shared/interfaces';
import {DataServiceError, handleError} from '../../../../lib/services.utils';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) {
  }

  createActivity(activity: Partial<Activity>): Observable<Activity | DataServiceError> {
    return this.http.post<Activity>( `api/activities`, activity)
      .pipe(
        tap(data => console.log('Got created activity', JSON.stringify(data))),
        catchError(handleError)
      );
  }
}
