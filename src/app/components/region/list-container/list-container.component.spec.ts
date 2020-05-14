import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionListContainerComponent } from './list-container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { ListSelectComponent } from '../../list-select/list-select.component';
import * as selectors from '../../../store/selectors/region.selector';
import { resetCountries } from 'src/app/store/actions/country.actions';
import { getCountriesByRegion } from 'src/app/store/actions/region.actions';

describe('RegionListContainerComponent', () => {
  let component: RegionListContainerComponent;
  let fixture: ComponentFixture<RegionListContainerComponent>;
  let mockStore: MockStore;
  let mockRegionSelector;
  const mockRegions = ['asia', 'europe'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionListContainerComponent, ListSelectComponent ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();
    mockStore = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionListContainerComponent);
    mockStore = TestBed.inject(MockStore);
    mockRegionSelector = mockStore.overrideSelector(selectors.selectAllRegions, mockRegions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the regions from the store', () => {
    component.regions$.subscribe(regions => {
      expect(regions).toEqual(mockRegions);
    });
  });

  it('should select the countries by region', () => {
    spyOn(mockStore, 'dispatch');
    component.onChanged(mockRegions[0]);
    fixture.detectChanges();
    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith(getCountriesByRegion({ payload: mockRegions[0] }));
  });

  it('should reset the countries', () => {
    spyOn(mockStore, 'dispatch');
    component.onChanged('');
    fixture.detectChanges();
    expect(mockStore.dispatch).toHaveBeenCalled();
    expect(mockStore.dispatch).toHaveBeenCalledWith(resetCountries());
  });

});
