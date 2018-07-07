import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {NewestComponent} from './component/newest.component';
import {NewestService} from './service/newest.service';

const newestRoutes: Routes = [
  {
    path: '',
    component: NewestComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(newestRoutes)
  ],
  declarations: [ NewestComponent],
  providers: [NewestService]
})
export class NewestModule { }
