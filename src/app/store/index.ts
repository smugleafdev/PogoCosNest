import * as actions from './actions';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  locations: string[];
  pokemons: string[];
}

export const initialState: State = { locations: [], pokemons: [] };

export function locationReducer(
  state: State = initialState,
  action: actions.LocationActions
): State {
  switch (action.type) {
    case actions.ADD_POKEMON: {
      return {
        locations: state.locations,
        pokemons: [...state.pokemons, action.locationName, action.pokemonName]
      };
    }
    case actions.ADD_LOCATION: {
      return {
        locations: [...state.locations, action.name],
        pokemons: state.pokemons
      };
    }
    default: {
      return state;
    }
  }
}

export const getLocations = (state: State) => state.locations;
