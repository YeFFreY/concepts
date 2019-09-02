import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Activity} from '../../shared/interfaces';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) {
  }

  getActivity(id: number): Observable<Activity> {
    return this.http.get<Activity>( `api/activities/${id}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    console.error(err);
    return throwError('An error occurred');
  }
}
