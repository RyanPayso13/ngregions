import * as fromCountry from './country.reducer';
import { initialCountryState } from '../state/country.state';
import { setCountries, setSelectedCountry, resetCountries } from '../actions/country.actions';

describe('Country reducer', () => {

  const countries = require('../../../assets/mock-data/europe.json');

  it('should have initial state', () => {
    expect(fromCountry.reducer(initialCountryState, {type: '@ngrx/store/init'})).toEqual(initialCountryState);
  });

  it('should set the countries', () => {
    const state = {
      ...initialCountryState
    };
    const action = setCountries({payload: [...countries]});
    const expected = {
      ...state,
      countries: [...countries]
    };
    expect(fromCountry.reducer(state, action)).toEqual(expected);
  });

  it('should set the selected country', () => {
    const state = {
      ...initialCountryState
    };
    const action = setSelectedCountry({payload: countries[0]});
    const expected = {
      ...state,
      selectedCountry: countries[0]
    };
    expect(fromCountry.reducer(state, action)).toEqual(expected);
  });

  it('should reset', () => {
    const state = {
      countries: [...countries],
      selectedCountry: countries[0]
    };
    const action = resetCountries();
    const expected = {
      ...initialCountryState
    };
    expect(fromCountry.reducer(state, action)).toEqual(expected);
  });

});
