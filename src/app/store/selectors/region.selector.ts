import { createSelector } from '@ngrx/store';
import { AppState } from 'src/models/app-state.model';
import { RegionState } from 'src/models/region-state.model';

export const selectRegionFeature = (state: AppState) => state.region;
export const selectAllRegions = createSelector(selectRegionFeature, (state: RegionState) => state.regions);
