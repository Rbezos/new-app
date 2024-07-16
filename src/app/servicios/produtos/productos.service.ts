import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonTypeColor } from '../../interfaces/type.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

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

  getData(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  getProducts(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getColorByType(type: string): string {
    const typeColor = this.typeColors.find(t => t.type === type);
    return typeColor ? typeColor.color : '#000000'; // Color por defecto si no encuentra el tipo
  }

}
