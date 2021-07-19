import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {
        id: 11,
        firstName: 'Dr Nice',
        lastName: 'Peter',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 12,
        firstName: 'Narco',
        lastName: 'Jojo',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 13,
        firstName: 'Bombasto',
        lastName: 'Banjo',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 14,
        firstName: 'Celeritas',
        lastName: 'Ross',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 15,
        firstName: 'Magneta',
        lastName: 'Titus',
        age: 50,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 16,
        firstName: 'RubberMan',
        lastName: 'Nick',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 17,
        firstName: 'Dynama',
        lastName: 'Dick',
        age: 25,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 18,
        firstName: 'Dr IQ',
        lastName: 'Chris',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 19,
        firstName: 'Magma',
        lastName: 'Mac',
        age: 30,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 20,
        firstName: 'Tornado',
        lastName: 'Sam',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
      {
        id: 21,
        firstName: 'Tornado',
        lastName: 'Sam',
        age: 20,
        address: {
          address1: 'pickering',
          address2: 'somerser',
          zip: 'abc',
          state: 'NJ',
        },
      },
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
