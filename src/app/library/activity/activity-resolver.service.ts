import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ActivityResolved} from '../../shared/interfaces';
import {Observable, of} from 'rxjs';
import {ActivityService} from './activity.service';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ActivityResolverService implements Resolve<ActivityResolved> {


  constructor(private activityService: ActivityService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActivityResolved> {
    console.log('resolving !');
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Activity id was not a number: ${id}`;
      console.error(message);
      return of({activity: null, error: message});

    }
    return this.activityService.getActivity(+id)
      .pipe(
        map(activity => ({activity})),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({activity: null, error: message});
        })
      );
  }
}
