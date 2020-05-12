import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let el: DebugElement;
  let cells: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    component.country = {"name":"Belgium","topLevelDomain":[".be"],"alpha2Code":"BE","alpha3Code":"BEL","callingCodes":["32"],"capital":"Brussels","altSpellings":["BE","België","Belgie","Belgien","Belgique","Kingdom of Belgium","Koninkrijk België","Royaume de Belgique","Königreich Belgien"],"region":"Europe","subregion":"Western Europe","population":11319511,"latlng":[50.83333333,4.0],"demonym":"Belgian","area":30528.0,"gini":33.0,"timezones":["UTC+01:00"],"borders":["FRA","DEU","LUX","NLD"],"nativeName":"België","numericCode":"056","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"nl","iso639_2":"nld","name":"Dutch","nativeName":"Nederlands"},{"iso639_1":"fr","iso639_2":"fra","name":"French","nativeName":"français"},{"iso639_1":"de","iso639_2":"deu","name":"German","nativeName":"Deutsch"}],"translations":{"de":"Belgien","es":"Bélgica","fr":"Belgique","ja":"ベルギー","it":"Belgio","br":"Bélgica","pt":"Bélgica","nl":"België","hr":"Belgija","fa":"بلژیک"},"flag":"https://restcountries.eu/data/bel.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"BEL"};
    fixture.detectChanges();
    cells = fixture.debugElement.queryAll(By.css('td'));
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a details table', () => {
    expect(fixture.debugElement.query(By.css('table'))).toBeDefined();
  });

  it('should render headers', () => {
    let headerValues = ['Name', 'Capital', 'Population', 'Currencies', 'Flag'];
    let headers = fixture.debugElement.queryAll(By.css('th'));
    expect(headers.length).toEqual(5);
    headerValues.forEach((text, index) => expect(headers[index].nativeElement.textContent).toBe(text))
  });

  it('should render the country name', () => {
    expect(cells[0].nativeElement.textContent).toBe('Belgium');
  });

  it('should render the country capital', () => {
    expect(cells[1].nativeElement.textContent).toBe('Brussels');
  });

  it('should render the population', () => {
    expect(cells[2].nativeElement.textContent).toBe('11319511');
  });

  it('should render the country currencies', () => {
    let currencies = fixture.debugElement.queryAll(By.css('td > div'));
    let values = fixture.debugElement.queryAll(By.css('td > div > ul > li'));
    expect(currencies.length).toEqual(1);
    expect(values.length).toEqual(3);
    expect(values[0].nativeElement.textContent).toBe('code: EUR');
    expect(values[1].nativeElement.textContent).toBe('name: Euro');
    expect(values[2].nativeElement.textContent).toBe('symbol: €');
  });

  it('should render the country flag', () => {
    let flag = fixture.debugElement.query(By.css('img'));
    expect(flag).toBeDefined();
    expect(flag.nativeElement.src).toBe('https://restcountries.eu/data/bel.svg');
    expect(flag.nativeElement.alt).toBe('Belgium flag');
  });

});
