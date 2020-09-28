import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { HeroService } from '../services/hero.service'

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private http: HttpClient, private heroService: HeroService) {}

  heros: any

  ngOnInit() {
    this.heroService.getHeros().subscribe(res => this.heros = res)
  }
}
