import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Activity} from '../../shared/interfaces';
import {DataServiceError, handleError} from '../../../lib/services.utils';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) {
  }

  getActivities(): Observable<Activity[] | DataServiceError> {
    return this.http.get<Activity[]>('api/activities')
      .pipe(
        tap(data => console.log('Got activities', JSON.stringify(data))),
        catchError(handleError)
      );
  }

}
