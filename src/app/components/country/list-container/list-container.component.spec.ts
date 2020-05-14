import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { CountryListContainerComponent } from './list-container.component';
import { ListSelectComponent } from '../../list-select/list-select.component';
import * as selectors from 'src/app/store/selectors/country.selector';
import { setSelectedCountry } from 'src/app/store/actions/country.actions';

describe('ListContainerComponent', () => {
  let component: CountryListContainerComponent;
  let fixture: ComponentFixture<CountryListContainerComponent>;
  let mockStore: MockStore;
  let mockAllCountryNamesSelector;
  let mockSelectCountryByNameSelector;
  let mockCountriesByName = ['Ukraine', 'Albania'];
  let mockSelectCountryByName = {"name":"Ukraine","topLevelDomain":[".ua"],"alpha2Code":"UA","alpha3Code":"UKR","callingCodes":["380"],"capital":"Kiev","altSpellings":["UA","Ukrayina"],"region":"Europe","subregion":"Eastern Europe","population":42692393,"latlng":[49.0,32.0],"demonym":"Ukrainian","area":603700.0,"gini":26.4,"timezones":["UTC+02:00"],"borders":["BLR","HUN","MDA","POL","ROU","RUS","SVK"],"nativeName":"Україна","numericCode":"804","currencies":[{"code":"UAH","name":"Ukrainian hryvnia","symbol":"₴"}],"languages":[{"iso639_1":"uk","iso639_2":"ukr","name":"Ukrainian","nativeName":"Українська"}],"translations":{"de":"Ukraine","es":"Ucrania","fr":"Ukraine","ja":"ウクライナ","it":"Ucraina","br":"Ucrânia","pt":"Ucrânia","nl":"Oekraïne","hr":"Ukrajina","fa":"وکراین"},"flag":"https://restcountries.eu/data/ukr.svg","regionalBlocs":[],"cioc":"UKR"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryListContainerComponent, ListSelectComponent ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListContainerComponent);
    mockStore = TestBed.inject(MockStore);
    mockAllCountryNamesSelector = mockStore.overrideSelector(selectors.selectAllCountryNames, mockCountriesByName);
    mockSelectCountryByNameSelector = mockStore.overrideSelector(selectors.selectCountryByName, mockSelectCountryByName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list the country names from the store', () => {
    component.countryNames$.subscribe(names => {
      expect(names).toEqual(mockCountriesByName);
    });
  });

  it('should set the selected country', () => {
    spyOn(mockStore, 'dispatch');
    component.onChanged(mockCountriesByName[0]);
    fixture.detectChanges();
    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith(setSelectedCountry({ payload: mockSelectCountryByName }));
  });

});
