import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; // URL to web api
  constructor(
    private messageService : MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  /** Log a HeroService message with the MessageService */
  private log(message: String) {
    this.messageService.add('HeroService: $(message)');
  }
}
