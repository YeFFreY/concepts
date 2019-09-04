import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityComponent} from './activity.component';
import {ActivityResolverService} from './activity-resolver.service';
import {ActivityDetailsComponent} from './activity-details/activity-details.component';


const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    resolve: {resolvedData: ActivityResolverService},
    // should the resolve be placed on the child ? details data and edit data might not be the same?
    // do I need to do something that must be done on the ActivityComponent which would requires this data ?
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full'},
      { path: 'details', component: ActivityDetailsComponent },
      { path: 'edit', component: ActivityDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {
  static components = [ActivityComponent, ActivityDetailsComponent ];
}
