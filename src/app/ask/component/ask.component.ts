import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';
import {AskService} from '../service/ask.service';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  items: Observable<Item[]>;
  page = 1;

  constructor(private askService: AskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.page = parameters['page'];
      this.loadStories(this.page);
    });
  }

  public nextStories(): void {
    this.router.navigate(['ask', ++this.page]);
  }

  public previouseStories(): void {
    if (this.page - 1 >= 1) {
      this.router.navigate(['ask', --this.page]);
    }
  }

  private loadStories(page: number): void {
    this.items = this.askService.getStories(page);
  }

}
