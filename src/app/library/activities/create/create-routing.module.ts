import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityCreateComponent} from './activity-create.component';
import {ActivityDetailsFormComponent} from './activity-details-form.component';
import {ActivitySkillsFormComponent} from './activity-skills-form/activity-skills-form.component';


const routes: Routes = [
  {path: '', component: ActivityCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {
  static components = [ActivityCreateComponent, ActivityDetailsFormComponent, ActivitySkillsFormComponent];
}
