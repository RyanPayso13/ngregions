import { Action, createReducer, on } from "@ngrx/store";
import * as CountryActions from '../actions/country.actions';
import { initialCountryState } from '../state/country.state';

const countryReducer = createReducer(
  initialCountryState,
    on(CountryActions.setCountries, (state, { payload }) => ({ ...state, countries: [...payload] })),
    on(CountryActions.setSelectedCountry, (state, { payload } ) => ({ ...state, selectedCountry: payload }))

);

export function reducer(state = initialCountryState, action: Action) {
  return countryReducer(state, action);
}
