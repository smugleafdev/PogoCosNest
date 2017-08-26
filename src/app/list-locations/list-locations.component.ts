import { Component, OnInit } from '@angular/core';
import { State, getLocations } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.css']
})
export class ListLocationsComponent implements OnInit {
  locations: Observable<string[]>;

  constructor(private store: Store<State>) {
    // this.locations$ = store.select(getLocations);
  }

  ngOnInit() {
    this.locations = this.store.select(getLocations);
  }
}
