import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {JobComponent} from './component/job.component';
import {JobService} from './service/job.service';

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
  declarations: [ JobComponent],
  providers: [JobService]
})
export class JobsModule { }
