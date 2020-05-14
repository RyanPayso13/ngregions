import { createSelector } from '@ngrx/store';
import { AppState } from 'src/models/app-state.model';
import { RegionState } from 'src/models/region-state.model';

export const selectCountryFeature = (state: AppState) => state.region;
export const selectAllRegions = createSelector(selectCountryFeature, (state: RegionState) => state.regions);
