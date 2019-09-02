import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivityCategory} from '../../shared/interfaces';
import {catchError, tap} from 'rxjs/operators';
import {handleError} from '../../../lib/services.utils';

@Injectable({
  providedIn: 'root'
})
export class ActivityCategoryService {

  activityCategories$ = this.http.get<ActivityCategory[]>('api/activityCategories')
    .pipe(
      tap(data => console.log('Got activity categories', JSON.stringify(data))),
      catchError(handleError)
    );

  constructor(private http: HttpClient) {
  }
}
