import { createAction, props } from '@ngrx/store';
import { Country } from 'src/models/country.model';

export enum CountryActions {
  SetCountries = '[Country] Set Countries',
  SetSelectedCountry = '[Country] Set Selected Country'
}

export const setCountries  = createAction(
  CountryActions.SetCountries,
  props<{payload: Array<Country>}>()
);

export const setSelectedCountry = createAction(
  CountryActions.SetSelectedCountry,
  props<{payload: Country}>()
);
