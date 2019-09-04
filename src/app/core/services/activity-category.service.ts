import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivityCategory} from '../../shared/interfaces';
import {catchError, shareReplay, tap} from 'rxjs/operators';
import {DataServiceError, handleError} from '../../../lib/services.utils';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityCategoryService {

  private activityCategories$: Observable<ActivityCategory[] | DataServiceError> =
    this.http.get<ActivityCategory[]>('api/activityCategories')
      .pipe(
        tap(data => console.log('Got activity categories', JSON.stringify(data))),
        shareReplay(1), // this allows to  not ask for the HTTP GET but use the last value each time it is subscribed to
        catchError(handleError)
      );

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<ActivityCategory[] | DataServiceError> {
    return this.activityCategories$;
  }
}
