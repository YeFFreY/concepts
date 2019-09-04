import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesOverviewComponent} from './activities-overview.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';


const routes: Routes = [
  {path: '', component: ActivitiesOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesOverviewRoutingModule {
  static components = [ActivitiesOverviewComponent, ActivitiesListComponent];
}
