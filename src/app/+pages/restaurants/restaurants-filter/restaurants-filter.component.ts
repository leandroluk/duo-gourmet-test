import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { IRestaurant } from '../../../+core/interfaces/restaurant.interface';
import { RestaurantsService } from '../restaurants.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'restaurants-filter',
  templateUrl: './restaurants-filter.component.html',
  styleUrls: ['./restaurants-filter.component.scss']
})
export class RestaurantsFilterComponent implements OnInit {

  @Output() public restaurants: EventEmitter<IRestaurant[]> = new EventEmitter();

  private querySubject: Subject<string> = new Subject();

  constructor(private api: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
    this.querySubject
      .pipe(debounceTime(1000))
      .subscribe(query => this.getRestaurants(query));
  }

  private getRestaurants(query?: string) {
    this.api.getRestaurants().subscribe(res => {
      if (!!query)
        res = res.filter(i => i.name.toLowerCase().indexOf(query) > -1 || i.cooking.toLowerCase().indexOf(query) > -1)
      this.restaurants.emit(res);
    });
  }

  public onQuery(query) {
    this.querySubject.next(query);
  }

}
