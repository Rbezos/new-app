import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PokemonTypeColor } from '../../interfaces/type.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  private arrayPokemons: any[] = [];
  private cache = new Map<string, any>();
  private numPokemons = new Map<number, number>();

  private typeColors: PokemonTypeColor[] = [
    { type: 'steel', color: 'LightGrey', border: 'Silver'},
    { type: 'ice', color: 'AquaMarine', border: 'PaleTurquoise'},
    { type: 'fighting', color: 'Firebrick', border: 'Darkred'},
    { type: 'normal', color: 'Lavender', border: 'Gainsboro'},
    { type: 'grass', color: 'Lime', border: 'Limegreen'},
    { type: 'psychic', color: 'Violet', border: 'Plum'},
    { type: 'rock', color: 'Peru', border: 'Chocolate'},
    { type: 'dark', color: 'SlateGray', border: 'Darkslategray'},
    { type: 'ground', color: 'BurlyWood', border: 'Tan'},
    { type: 'poison', color: 'Mediumpurple', border: 'Blueviolet'},
    { type: 'fairy', color: 'rgb(255, 136, 238)', border: 'rgb(255, 187, 238)'},
    { type: 'fire', color: 'Crimson', border: 'Firebrick'},
    { type: 'ghost', color: 'Purple', border: 'Indigo'},
    { type: 'electric', color: 'Yellow', border: 'Gold'},
    { type: 'dragon', color: 'MediumSlateBlue', border: 'SlateBlue'},
    { type: 'bug', color: 'YellowGreen', border: 'OliveDrab'},
    { type: 'water', color: 'RoyalBlue', border: 'MediumSlateBlue'}
  ];

  constructor(private http: HttpClient) { }

  getData(offset: number, limit: number): Observable<any> {
    const cacheKey = `${offset}-${limit}`;

    if(this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    }

    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(this.url, { params }).pipe(
      tap(data => {
        this.cache.set(cacheKey, { results: data.results, numPokemon: data.count});
      })
    )
  }

  getProducts(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getColorByType(type: string): string {
    const typeColor = this.typeColors.find(t => t.type === type);
    return typeColor ? typeColor.color : '#000000'; // Color por defecto si no encuentra el tipo
  }

}
