import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { TOKEN } from '../../token'

@Injectable()

export class HeroService {
  heros: Observable<any>;

  private url = `https://superheroapi.com/api.php/${TOKEN}/search/flash`

  constructor(private http: HttpClient) {}

  getHeros(): Observable<any> {
    return this.heros = this.http.get(this.url)
  }
}