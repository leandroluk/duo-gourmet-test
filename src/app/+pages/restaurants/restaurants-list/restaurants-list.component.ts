import { Component, Input } from '@angular/core';
import { IRestaurant } from '../../../+core/interfaces/restaurant.interface';

@Component({
  selector: 'restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent {

  @Input() public restaurants?: IRestaurant[];

}
