import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';


@Injectable()
export class JobService {

  private readonly jobUrl = 'https://api.hackerwebapp.com/jobs?page=';


  constructor(private httpClient: HttpClient) {
  }

  public getStories(page: number): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.jobUrl + page);
  }

}
