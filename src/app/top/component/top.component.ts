import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {TopService} from '../service/top.service';
import {Item} from '../../shared/model/item';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
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

  onPageChange($event: number) {
    this.page = $event.valueOf();
    this.router.navigate(['top', this.page]);
  }

  private loadStories(page: number): void {
    this.items = this.topService.getNewStories(page);
  }
}
