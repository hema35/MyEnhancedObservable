import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  // hero:Hero = {
  //   id : 1,
  //   firstfirstName : 'Windstorm',
  //   age: 20,
  // }
  // selectedHero?: Hero;
  // onSelect(hero : Hero):void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }
  constructor(private heroService : HeroService, private messageService: MessageService ) { }

  ngOnInit(): void {
    this.getHeroesFromLocalComponent();
  }

  // getHeroesFromLocalComponent123() : void {
  //   // this.heroes = HEROES;
  //   // this.heroes = this.heroService.getHeroesFromService();
  //   this.heroService.getHeroesFromService()
  //    .subscribe((xs) => {
  //      console.log('my hero: ', xs);
  //      this.heroes = xs;
  //    });
  //  }

getHeroesFromLocalComponent() : void {
 this.heroService.getHeroesFromService()
  .subscribe(heroes => {
    console.log('myArraySize :', heroes.length, heroes);
    this.heroes = heroes
  });
}
add(firstName: string, lastName: string): void {
  firstName = firstName.trim();
  lastName = lastName.trim();
  if (!firstName && !lastName) { return; }
  this.heroService.addHero({ firstName, lastName } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
}
