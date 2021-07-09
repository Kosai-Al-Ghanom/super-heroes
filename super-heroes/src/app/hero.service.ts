import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from "./hero";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url="https://akabab.github.io/superhero-api/api/all.json"

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url);
  }


}
