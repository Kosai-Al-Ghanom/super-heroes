import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];
  name: string = "";


  constructor(private heroservice: HeroService,) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  Search(): void{
    if(this.name != ""){
    this.heroes = this.heroes.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.trim())
    })
  } else if(this.name == ""){
    this.ngOnInit();
  }
  }
  
}