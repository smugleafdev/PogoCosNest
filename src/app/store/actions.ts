import { Action } from '@ngrx/store';

export const ADD_LOCATION = 'Add Location';

export class AddLocation implements Action {
  readonly type = ADD_LOCATION;
  constructor(public name: string) {}
}

export type LocationActions = AddLocation;
