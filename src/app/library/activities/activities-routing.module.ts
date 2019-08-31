import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActivitiesComponent} from './activities.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';


const routes: Routes = [
  {path: '', component: ActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {
  static components = [ActivitiesComponent, ActivitiesListComponent];
}
