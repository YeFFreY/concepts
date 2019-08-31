import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LibraryComponent} from './library.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'activities'},
  {
    path: '',
    component: LibraryComponent,
    children: [
      {path: 'activities/:id', loadChildren: () => import('./activity/activity.module').then(mod => mod.ActivityModule)},
      {path: 'activities', loadChildren: () => import('./activities/activities.module').then(mod => mod.ActivitiesModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {
  static components = [LibraryComponent];
}
