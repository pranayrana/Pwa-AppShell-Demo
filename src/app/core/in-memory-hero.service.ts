import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryHeroService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getHeroes():Observable<Hero[]> { 
       return this.httpClient.get<Hero[]>(this.SERVER_URL + 'heroes');
  }

  public getHero(heroId:number):Observable<Hero>{
       return this.httpClient.get<Hero>(`${this.SERVER_URL + 'heroes'}/${heroId}`); 
  }

  public createHero(hero: Hero){
      return this.httpClient.post(`${this.SERVER_URL + 'heroes'}`, hero)
  }

  public deleteHero(heroId:number){
      return this.httpClient.delete(`${this.SERVER_URL + 'heroes'}/${heroId}`)
  }

  public updateHero(hero: Hero){
      return this.httpClient.put(`${this.SERVER_URL + 'heroes'}/${hero.id}`, hero)
  }
}
