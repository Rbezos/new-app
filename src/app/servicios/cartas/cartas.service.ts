import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private url = 'https://api.pokemontcg.io/v2/cards?q=name:';
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  getProducts(pokemon: string): Observable<any> {
    const cacheKey = `${pokemon}`;
  
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    }
  
    const finalUrl = `${this.url}${pokemon}`;
  
    return this.http.get<any>(finalUrl).pipe(
      tap(data => {
        console.log('API Response:', data);
        this.cache.set(cacheKey, data);
      })
    );
  }

  getImagesCards(pokemon: string): Observable<any> {
    return this.getProducts(pokemon).pipe(
      map(data => {
        // Adjust according to actual API response structure
        const arrayImages: any[] = [];
        // Assuming data is directly an array or an object containing cards
        if (data && data.data && Array.isArray(data.data)) {
          for (const value of data.data) {
            if (value.images && value.images.small) {
              arrayImages.push(value.images.small);
            }
          }
        }
        return arrayImages;
      })
    );
  }

}