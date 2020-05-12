import { createAction, props } from '@ngrx/store';

export enum RegionActions {
  GetCountriesByRegion = '[Region] Get Countries By Region'
}

export const getCountriesByRegion = createAction(
  RegionActions.GetCountriesByRegion,
  props<{payload: string}>()
);
