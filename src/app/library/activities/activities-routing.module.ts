import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./overview/activities-overview.module').then(mod => mod.ActivitiesOverviewModule)},
  {path: 'create', loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule)},
  {path: ':id', loadChildren: () => import('./activity/activity.module').then(mod => mod.ActivityModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {
}
