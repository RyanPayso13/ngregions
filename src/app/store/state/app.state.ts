import { AppState } from 'src/models/app-state.model';
import { initialRegionState } from './region.state';
import { initialCountryState } from './country.state';

export const initialAppState: AppState = {
  region: initialRegionState,
  country: initialCountryState
}
