import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {AskComponent} from './component/ask.component';

const askRoutes: Routes = [
  {
    path: '',
    component: AskComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(askRoutes)
  ],
  declarations: [ AskComponent]
})
export class AskModule { }
