import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';
import {NewestService} from '../service/newest.service';


@Component({
  selector: 'app-newest-news',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  items: Observable<Item[]>;
  page = 1;

  constructor(private newestSerive: NewestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.page = parameters['page'];
      this.loadStories(this.page);
    });
  }

  public nextStories(): void {
    this.router.navigate(['new', ++this.page]);
  }

  public previouseStories(): void {
    if (this.page - 1 >= 1) {
      this.router.navigate(['new', --this.page]);
    }
  }

  private loadStories(page: number): void {
    this.items = this.newestSerive.getStories(page);
  }

}
