import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let countryData = {"name":"Albania","topLevelDomain":[".al"],"alpha2Code":"AL","alpha3Code":"ALB","callingCodes":["355"],"capital":"Tirana","altSpellings":["AL","Shqipëri","Shqipëria","Shqipnia"],"region":"Europe","subregion":"Southern Europe","population":2886026,"latlng":[41.0,20.0],"demonym":"Albanian","area":28748.0,"gini":34.5,"timezones":["UTC+01:00"],"borders":["MNE","GRC","MKD","KOS"],"nativeName":"Shqipëria","numericCode":"008","currencies":[{"code":"ALL","name":"Albanian lek","symbol":"L"}],"languages":[{"iso639_1":"sq","iso639_2":"sqi","name":"Albanian","nativeName":"Shqip"}],"translations":{"de":"Albanien","es":"Albania","fr":"Albanie","ja":"アルバニア","it":"Albania","br":"Albânia","pt":"Albânia","nl":"Albanië","hr":"Albanija","fa":"آلبانی"},"flag":"https://restcountries.eu/data/alb.svg","regionalBlocs":[{"acronym":"CEFTA","name":"Central European Free Trade Agreement","otherAcronyms":[],"otherNames":[]}],"cioc":"ALB"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
