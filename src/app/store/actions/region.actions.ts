import { createAction, props } from '@ngrx/store';

export enum RegionActions {
  SetSelectedRegion = '[Region] Set Selected Region'
}

export const setSelectedRegion = createAction(
  RegionActions.SetSelectedRegion,
  props<{region: string}>()
);
