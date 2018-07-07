import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TopComponent} from './component/top.component';
import {TopService} from './service/top.service';
import {SharedModule} from '../shared/shared.module';


const topRoutes: Routes = [
  {
    path: '',
    component: TopComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(topRoutes)
  ],
  declarations: [TopComponent],
  providers: [TopService]
})
export class TopModule { }
