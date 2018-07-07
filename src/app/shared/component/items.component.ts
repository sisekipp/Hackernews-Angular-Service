import {Component, Input} from '@angular/core';

import {Item} from '../model/item';

@Component({
  selector: 'app-items',
  template: `
    <div class="card">
      <div class="card-body">
        <a class="card-title h6" href="{{item.url}}">{{item.title}}</a>
        <div class="card-subtitle text-gray">{{item.points}} points by {{item.user}} {{item.time_ago}} |
          {{item.comments_count}} comments
        </div>
      </div>
    </div>
  `,
  styles: [
    'mat-card { margin: 20px 0px 20px 0px; }'
  ]
})
export class ItemComponent {

  @Input()
  item: Item;
}
