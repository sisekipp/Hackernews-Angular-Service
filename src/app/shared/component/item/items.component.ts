import {Component, Input} from '@angular/core';

import {Item} from '../../model/item';

@Component({
  selector: 'app-items',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent {

  @Input()
  item: Item;
}
