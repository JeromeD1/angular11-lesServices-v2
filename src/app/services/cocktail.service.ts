import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private httpClient: HttpClient) { }

getCocktails() : Observable<Cocktail[]> {
  return this.httpClient.get<Cocktail[]>("../../assets/cocktails.json");
}

}
