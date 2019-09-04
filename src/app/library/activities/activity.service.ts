import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Activity, ActivityCategory} from '../../shared/interfaces';
import {DataServiceError, handleError} from '../../../lib/services.utils';
import {ActivityCategoryService} from '../../core/services/activity-category.service';

@Injectable()
export class ActivityService {

  private activities$: Observable<Activity[] | DataServiceError> =
    this.http.get<Activity[]>('api/activities')
      .pipe(
        tap(data => console.log('Got activities', JSON.stringify(data))),
        catchError(handleError)
      );

  private activitiesWithLookUpData$: Observable<Activity[] | DataServiceError> =
    combineLatest([this.activities$, this.activityCategoryService.getCategories()]).pipe(
      map(([activities, categories]: [Activity[], ActivityCategory[]]) =>
        activities.map(activity => ({
          ...activity,
          category: categories.find(c => activity.categoryId === c.id)
        }) as Activity)
      )
    );

  constructor(private http: HttpClient, private activityCategoryService: ActivityCategoryService) {
  }

  getActivities(): Observable<Activity[] | DataServiceError> {
    return this.activitiesWithLookUpData$;
  }

}
