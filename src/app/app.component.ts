import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {HackernewsService} from './shared/service/hackernews.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loading: boolean;

  private subscription: Subscription;

  constructor(private hackernewsService: HackernewsService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.hackernewsService.loading.subscribe(value => this.loading = value);
  }

}
