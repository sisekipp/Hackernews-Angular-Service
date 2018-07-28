import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from './component/item/items.component';
import { PagingComponent } from './component/paging/paging.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent, PagingComponent ],
  exports: [CommonModule, ItemComponent, PagingComponent]
})
export class SharedModule { }
