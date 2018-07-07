import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';
import {JobService} from '../service/job.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  items: Observable<Item[]>;
  page = 1;

  constructor(private jobService: JobService, private router: Router, private route: ActivatedRoute) { }

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
    this.items = this.jobService.getStories(page);
  }

}
