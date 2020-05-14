import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DetailsContainerComponent } from './details-container.component';
import { DetailsUiComponent } from '../details-ui/details-ui.component';
import * as selectors from '../../../store/selectors/country.selector';

describe('CountryDetailsContainerComponent', () => {
  let component: DetailsContainerComponent;
  let fixture: ComponentFixture<DetailsContainerComponent>;
  let mockStore: MockStore;
  let mockCountrySelector;
  const mockCountry = require('../../../../assets/mock-data/europe.json')[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsContainerComponent, DetailsUiComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsContainerComponent);
    mockStore = TestBed.inject(MockStore);
    mockCountrySelector = mockStore.overrideSelector(selectors.selectCountry, mockCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the country from the store', () => {
    component.country$.subscribe(country => {
      expect(country).toEqual(mockCountry);
    });
  });

});
