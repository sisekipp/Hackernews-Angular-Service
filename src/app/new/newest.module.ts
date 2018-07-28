import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {NewestComponent} from './component/newest.component';

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
  declarations: [ NewestComponent]
})
export class NewestModule { }
