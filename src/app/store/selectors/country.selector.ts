import { createSelector } from '@ngrx/store';
import { AppState } from 'src/models/app-state.model';
import { CountryState } from 'src/models/country-state.model';

export const selectCountryFeature = (state: AppState) => state.country;
export const selectAllCountries = createSelector(selectCountryFeature, (state: CountryState) => state.countries);
export const selectAllCountryNames = createSelector(selectCountryFeature, (state: CountryState) => state.countries.map(country => country.name));
export const selectCountryByName = createSelector(selectCountryFeature, (state: CountryState, name: string) => state.countries.find(country => country.name === name));
export const selectCountry = createSelector(selectCountryFeature, (state: CountryState) => state.selectedCountry);
