import * as selectors from './country.selector';
import { initialAppState } from '../state/app.state';
import { initialCountryState } from '../state/country.state';

describe('Country selectors', () => {

  const countries = require('../../../assets/mock-data/europe.json');
  const ukraine = {"name":"Ukraine","topLevelDomain":[".ua"],"alpha2Code":"UA","alpha3Code":"UKR","callingCodes":["380"],"capital":"Kiev","altSpellings":["UA","Ukrayina"],"region":"Europe","subregion":"Eastern Europe","population":42692393,"latlng":[49.0,32.0],"demonym":"Ukrainian","area":603700.0,"gini":26.4,"timezones":["UTC+02:00"],"borders":["BLR","HUN","MDA","POL","ROU","RUS","SVK"],"nativeName":"Україна","numericCode":"804","currencies":[{"code":"UAH","name":"Ukrainian hryvnia","symbol":"₴"}],"languages":[{"iso639_1":"uk","iso639_2":"ukr","name":"Ukrainian","nativeName":"Українська"}],"translations":{"de":"Ukraine","es":"Ucrania","fr":"Ukraine","ja":"ウクライナ","it":"Ucraina","br":"Ucrânia","pt":"Ucrânia","nl":"Oekraïne","hr":"Ukrajina","fa":"وکراین"},"flag":"https://restcountries.eu/data/ukr.svg","regionalBlocs":[],"cioc":"UKR"};
  const state = {
    countries: countries,
    selectedCountry: ukraine
  }
  const names = countries.map(country => country.name);

  it('should return the country feature', () => {
    expect(selectors.selectCountryFeature(initialAppState)).toEqual(initialAppState.country);
  });

  it('should return all countries', () => {
    expect(selectors.selectAllCountries.projector(state)).toEqual(countries);
  });

  it('should return all country names', () => {
    expect(selectors.selectAllCountryNames.projector(state)).toEqual(names);
  });

  it('should select the country', () => {
    expect(selectors.selectCountryByName.projector(state, 'Ukraine')).toEqual(ukraine);
  });

  it('should return the selected country', () => {
    expect(selectors.selectCountry.projector(state)).toEqual(ukraine);
  });

});
