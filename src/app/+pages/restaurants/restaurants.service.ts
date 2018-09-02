import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { IRestaurant } from '../../+core/interfaces/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  public getRestaurants(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>('assets/mock/restaurants.json');
  }

}
