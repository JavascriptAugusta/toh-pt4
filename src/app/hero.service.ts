import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    //return a new Promise object resolved with the value HEROES
    //this is a static method 
    return Promise.resolve(HEROES);
    //return Promise.reject('fail');
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      // call the resolve function after 2000 ms
      setTimeout(() => resolve(this.getHeroes())
      , 2000);
    });
  }
}
