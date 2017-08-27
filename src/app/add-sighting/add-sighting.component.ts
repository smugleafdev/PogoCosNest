import { Component, OnInit } from '@angular/core';
import { State } from '../store';
import { Store } from '@ngrx/store';
import { AddPokemon } from '../store/actions';

@Component({
  selector: 'app-add-sighting',
  templateUrl: './add-sighting.component.html',
  styleUrls: ['./add-sighting.component.css']
})
export class AddSightingComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  addPokemon(pokemonName: string, locationName: string): void {
    this.store.dispatch(new AddPokemon(pokemonName, locationName));
  }
}
