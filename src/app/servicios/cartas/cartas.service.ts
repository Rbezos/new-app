import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private url = 'https://api.pokemontcg.io/v2/cards?q=name:';
  private cache = new Map<string, any>();
  private numPokemons = new Map<string, number>();  // Cambiar a Map<string, number>

  constructor(private http: HttpClient) { }

  getProducts(pokemon: string): Observable<any> {
    if (this.cache.has(pokemon)) {
      return of(this.cache.get(pokemon));
    }

    return this.http.get<any>(`${this.url}${pokemon}`).pipe(
      tap(response => this.cache.set(pokemon, response))
    );
  }

  getPokemonSearchCount(pokemon: string): number {
    return this.numPokemons.get(pokemon) || 0;  // Usar pokemon como clave de tipo string
  }

  incrementPokemonSearchCount(pokemon: string): void {
    const count = this.getPokemonSearchCount(pokemon);
    this.numPokemons.set(pokemon, count + 1);  // Usar pokemon como clave de tipo string
  }

}