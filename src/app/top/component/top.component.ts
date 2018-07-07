import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {TopService} from '../service/top.service';
import {Item} from '../../shared/model/item';


@Component({
  selector: 'app-top',
  template: `
    <div class="columns p-2">
      <div class="col-xs-6 col-mx-auto">
        <button (click)="previouseStories()">&lt; Prev</button>
        {{page}}
        <button (click)="nextStories()">Next &gt;</button>
      </div>
    </div>
    <div class="columns" *ngFor="let item of items | async">
      <div class="column col-xl-12 p-2">
        <app-items  [item]="item"></app-items>
      </div>
    </div>
  `
})
export class TopComponent implements OnInit {

  items: Observable<Item[]>;
  page = 1;

  constructor(private topService: TopService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.page = parameters['page'];
      this.loadStories(this.page);
    });
  }

  public nextStories(): void {
    this.router.navigate(['top', ++this.page]);
  }

  public previouseStories(): void {
    if (this.page - 1 >= 1) {
      this.router.navigate(['top', --this.page]);
    }
  }

  private loadStories(page: number): void {
    this.items = this.topService.getNewStories(page);
  }

}
