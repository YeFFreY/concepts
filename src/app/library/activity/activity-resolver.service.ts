import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Activity, ActivityResolved} from '../../shared/interfaces';
import {Observable, of} from 'rxjs';
import {ActivityService} from './activity.service';
import {catchError, map} from 'rxjs/operators';
import {DataServiceError} from '../../../lib/services.utils';
import {ActivityCategoryService} from '../../core/services/activity-category.service';

@Injectable()
export class ActivityResolverService implements Resolve<ActivityResolved> {


  constructor(private activityService: ActivityService, private activityCategoryService: ActivityCategoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActivityResolved> {
    this.activityCategoryService.getCategories().subscribe(
      data => console.log('resolving categories', data),
      error => console.error('error', error)
    );

    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const error = new DataServiceError();
      error.errorType = 'Unexpected';
      error.friendlyMessage = `Activity id was not a number: ${id}`;
      return of({activity: null, error});

    }
    return this.activityService.getActivity(+id)
      .pipe(
        map((activity: Activity) => ({activity})),
        catchError((error: DataServiceError) =>  of({activity: null, error}))
      );
  }
}
