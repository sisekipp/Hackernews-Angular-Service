import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from './component/items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent ],
  exports: [CommonModule, ItemComponent]
})
export class SharedModule { }
