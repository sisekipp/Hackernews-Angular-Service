import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemComponent} from './component/item/items.component';
import {PagingComponent} from './component/paging/paging.component';
import {HackernewsService} from './service/hackernews.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent, PagingComponent ],
  exports: [CommonModule, ItemComponent, PagingComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ HackernewsService ]
    };
  }
}
