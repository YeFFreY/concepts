import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActivityComponent} from './activity.component';
import {ActivityResolverService} from './activity-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: ActivityComponent, resolve: {resolvedData: ActivityResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {
  static components = [ActivityComponent];
}
