import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';
import {HackernewsService} from '../../shared/service/hackernews.service';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  items: Observable<Item[]>;
  page = 1;

  constructor(private hackernewsService: HackernewsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.page = parameters['page'];
      this.loadStories(this.page);
    });
  }

  onPageChange($event: number) {
    this.page = $event.valueOf();
    this.router.navigate(['ask', this.page]);
  }

  private loadStories(page: number): void {
    this.items = this.hackernewsService.getAskStories(page);
  }

}
