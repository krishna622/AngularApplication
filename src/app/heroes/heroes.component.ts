import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  // selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.Heroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
