import { Action, createReducer, on } from "@ngrx/store";
import * as CountryActions from '../actions/country.actions';
import { initialCountryState } from '../state/country.state';

const countryReducer = createReducer(
  initialCountryState,
    on(CountryActions.setSelectedCountry, (state, { country }) => ({
      selectedCountry: country
    }))
);

export function reducer(state = initialCountryState, action: Action) {
  return countryReducer(state, action);
}
