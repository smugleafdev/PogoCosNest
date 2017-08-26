import * as actions from './actions';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  temp: string;
  locations: string[];
}

export const initialState: State = { temp: 'test', locations: [] };

export function locationReducer(
  state: State = initialState,
  action: actions.LocationActions
): State {
  switch (action.type) {
    case actions.ADD_LOCATION: {
      return { temp: state.temp, locations: [...state.locations, action.name] };
    }
    default: {
      return state;
    }
  }
}

export const reducers: ActionReducerMap<any> = {
  locations: locationReducer
};

export const getLocations = (state: State) => state.locations;
