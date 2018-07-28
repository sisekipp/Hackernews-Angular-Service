import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {

  @Input()
  page: number;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  previouse() {
    if (this.page - 1 >= 1) {
      this.pageChange.emit(--this.page);
    }
  }

  next() {
    this.pageChange.emit(++this.page);
  }
}
