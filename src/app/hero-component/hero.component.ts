import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { TOKEN } from '../../token'

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private http: HttpClient) {}

  heros: any

  private url = `https://superheroapi.com/api.php/${TOKEN}/search/flash`

  ngOnInit() {
    this.http.get(this.url)
            .subscribe(res => this.heros = res)
  }
}
