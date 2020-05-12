import { Currency } from './currency.model';
import { Language } from './language.model';
import { Translation } from './translation.model';
import { Bloc } from './bloc.model';

export interface Country {
  name: string,
  topLevelDomain: Array<string>,
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: Array<string>,
  capital: string,
  altSpellings: Array<string>,
  region: string,
  subregion: string,
  population: number,
  latlng: Array<number>,
  demonym: string,
  area: number,
  gini: number,
  timezones: Array<string>,
  borders: Array<string>,
  nativeName: string,
  numericCode: string,
  currencies: Array<Currency>
  languages: Array<Language>,
  translations: Translation,
  flag: string,
  regionalBlocs: Array<Bloc>,
  cioc: string
}
