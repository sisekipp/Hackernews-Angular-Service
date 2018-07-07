import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Item} from '../../shared/model/item';

@Injectable()
export class TopService {

  private readonly topUrl = 'https://api.hackerwebapp.com/news?page=';


  constructor(private httpClient: HttpClient) {
  }

  public getNewStories(page: number): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.topUrl + page);
  }

}
