import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BehaviorSubject, Observable} from 'rxjs';

import {Item} from '../model/item';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  private readonly topUrl = 'https://api.hackerwebapp.com/news?page=';
  private readonly showUrl = 'https://api.hackerwebapp.com/show?page=';
  private readonly newestUrl = 'https://api.hackerwebapp.com/newest?page=';
  private readonly jobUrl = 'https://api.hackerwebapp.com/jobs?page=';
  private readonly askUrl = 'https://api.hackerwebapp.com/ask?page=';

  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private httpClient: HttpClient) { }


  public getTopStories(page: number): Observable<Item[]> {
    this.loading.next(true);

    return this.httpClient.get<Item[]>(this.topUrl + page).pipe(finalize(() => this.loading.next(false)));
  }

  public getShowStories(page: number): Observable<Item[]> {
    this.loading.next(true);

    return this.httpClient.get<Item[]>(this.showUrl + page).pipe(finalize(() => this.loading.next(false)));
  }

  public getNewStories(page: number): Observable<Item[]> {
    this.loading.next(true);


    return this.httpClient.get<Item[]>(this.newestUrl + page).pipe(finalize(() => this.loading.next(false)));
  }

  public getJobStories(page: number): Observable<Item[]> {
    this.loading.next(true);

    return this.httpClient.get<Item[]>(this.jobUrl + page).pipe(finalize(() => this.loading.next(false)));
  }

  public getAskStories(page: number): Observable<Item[]> {
    this.loading.next(true);

    return this.httpClient.get<Item[]>(this.askUrl + page).pipe(finalize(() => this.loading.next(false)));
  }
}
