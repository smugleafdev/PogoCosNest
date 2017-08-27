import { Action } from '@ngrx/store';

export const ADD_LOCATION = 'Add Location';
export const ADD_POKEMON = 'Add Pokemon';

export class AddLocation implements Action {
  readonly type = ADD_LOCATION;
  constructor(public name: string) {}
}

export class AddPokemon implements Action {
  readonly type = ADD_POKEMON;
  constructor(public pokemonName: string, public locationName: string) {}
}

export type LocationActions = AddLocation | AddPokemon;
