import { RegionState } from './region-state.model';
import { CountryState } from './country-state.model';

export interface AppState {
  region: RegionState,
  country: CountryState
}
