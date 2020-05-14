import { CountryActions, setCountries, setSelectedCountry, resetCountries } from "./country.actions";

describe('Region Actions', () => {

  const countries = require('../../../assets/mock-data/europe.json');

  it(`should create ${CountryActions.SetCountries}`, () => {
    const payload = { payload: countries };
    const action = setCountries(payload);
    expect(action).toEqual({ ...payload, type: CountryActions.SetCountries });
  });

  it(`should create ${CountryActions.SetSelectedCountry}`, () => {
    const payload = { payload: countries[0] };
    const action = setSelectedCountry(payload);
    expect(action).toEqual({ ...payload, type: CountryActions.SetSelectedCountry });
  });

  it(`should create ${CountryActions.ResetCountries}`, () => {
    const action = resetCountries();
    expect(action).toEqual({ type: CountryActions.ResetCountries });
  });


});
