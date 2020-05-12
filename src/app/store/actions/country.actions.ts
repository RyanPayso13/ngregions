import { createAction, props } from '@ngrx/store';
import { Country } from 'src/models/country.model';

export enum CountryActions {
  SetSelectedCountry = '[Country] Set Selected Country'
}

export const setSelectedCountry = createAction(
  CountryActions.SetSelectedCountry,
  props<{country: Country}>()
);
