import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';
import {HackernewsService} from '../../shared/service/hackernews.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

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
    this.router.navigate(['jobs', this.page]);
  }

  private loadStories(page: number): void {
    this.items = this.hackernewsService.getJobStories(page);
  }

}
