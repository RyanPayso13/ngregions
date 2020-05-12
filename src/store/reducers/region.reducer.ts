import { Action, createReducer, on } from "@ngrx/store";
import * as RegionActions from '../actions/region.actions';
import { initialRegionState } from '../state/region.state';

const regionReducer = createReducer(
    initialRegionState,
    on(RegionActions.setSelectedRegion, (state, { region }) => ({
      selectedRegion: region
    }))
);

export function reducer(state = initialRegionState, action: Action) {
  return regionReducer(state, action);
}
