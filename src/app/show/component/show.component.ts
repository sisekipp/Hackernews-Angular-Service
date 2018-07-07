import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';
import {ShowService} from '../service/show.service';


@Component({
  selector: 'app-show-news',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  items: Observable<Item[]>;
  page = 1;

  constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.page = parameters['page'];
      this.loadStories(this.page);
    });
  }

  public nextStories(): void {
    this.router.navigate(['show', ++this.page]);
  }

  public previouseStories(): void {
    if (this.page - 1 >= 1) {
      this.router.navigate(['show', --this.page]);
    }
  }

  private loadStories(page: number): void {
    this.items = this.showService.getStories(page);

  }
}
