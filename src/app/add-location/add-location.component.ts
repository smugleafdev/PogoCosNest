import { Component, OnInit } from '@angular/core';
import { State } from '../store';
import { Store } from '@ngrx/store';
import { AddLocation } from '../store/actions';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  addLocation(name: string): void {
    this.store.dispatch(new AddLocation(name));
  }
}
