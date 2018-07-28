import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {JobComponent} from './component/job.component';

const jobRoutes: Routes = [
  {
    path: '',
    component: JobComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(jobRoutes)
  ],
  declarations: [ JobComponent]
})
export class JobsModule { }
