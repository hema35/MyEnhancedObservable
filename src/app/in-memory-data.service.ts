import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, firstName: 'Dr Nice', lastName: 'Peter', age: 20 },
      { id: 12, firstName: 'Narco', lastName: 'Jojo', age: 20 },
      { id: 13, firstName: 'Bombasto', lastName: 'Banjo', age: 20 },
      { id: 14, firstName: 'Celeritas', lastName: 'Ross', age: 20 },
      { id: 15, firstName: 'Magneta', lastName: 'Titus', age: 50 },
      { id: 16, firstName: 'RubberMan', lastName: 'Nick', age: 20 },
      { id: 17, firstName: 'Dynama', lastName: 'Dick', age: 25 },
      { id: 18, firstName: 'Dr IQ', lastName: 'Chris', age: 20 },
      { id: 19, firstName: 'Magma', lastName: 'Mac', age: 30 },
      { id: 20, firstName: 'Tornado', lastName: 'Sam', age: 20 },
      { id: 21, firstName: 'Tornado', lastName: 'Sam', age: 20 }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
