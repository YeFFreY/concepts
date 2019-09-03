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

  getActivity(id: number): Observable<Activity | DataServiceError> {
    return this.http.get<Activity>( `api/activities/${id}`)
      .pipe(
        tap(data => console.log('Got activity', JSON.stringify(data))),
        catchError(handleError)
      );
  }

}
