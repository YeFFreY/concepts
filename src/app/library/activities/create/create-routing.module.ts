import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityCreateComponent} from './activity-create/activity-create.component';


const routes: Routes = [
  {path: '', component: ActivityCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {
  static components = [ActivityCreateComponent];
}
