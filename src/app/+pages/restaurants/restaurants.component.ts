import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../+core/interfaces/restaurant.interface';

@Component({
  selector: 'restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent {

  private _restaurants: IRestaurant[];
  public get restaurants(): IRestaurant[] { return this._restaurants; }
  public set restaurants(restaurants: IRestaurant[]) {

    this._restaurants = [];

    for (let restaurant of restaurants) {

      let loaded = 0;

      // load logo
      if (!!restaurant.logoImage) {
        let img = new Image();
        img.setAttribute('src', restaurant.logoImage);
        img.onload = () => {

          restaurant.logoImageLoaded = true;
          loaded++;

          if (loaded === 2)
            this._restaurants.push(restaurant);

        }
      } else loaded++;

      // load cover
      if (!!restaurant.coverImage) {
        let img = new Image();
        img.setAttribute('src', restaurant.coverImage);
        img.onload = () => {

          restaurant.coverImageLoaded = true;
          loaded++;

          if (loaded === 2)
            this._restaurants.push(restaurant);

        }
      } else loaded++;

    }

  }

}
