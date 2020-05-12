import { Country } from 'src/models/country.model';

export interface CountryState {
  countries: Array<Country>,
  selectedCountry: Country
}
