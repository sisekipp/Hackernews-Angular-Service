import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShowComponent} from './component/show.component';
import {ShowService} from './service/show.service';
import {SharedModule} from '../shared/shared.module';


const showRoutes: Routes = [
  {
    path: '',
    component: ShowComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(showRoutes)
  ],
  declarations: [ShowComponent],
  providers: [ShowService]
})
export class ShowModule { }
