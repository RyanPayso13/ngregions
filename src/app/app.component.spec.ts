import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';

import { DetailsContainerComponent } from './components/country/details-container/details-container.component';
import { DetailsUiComponent } from './components/country/details-ui/details-ui.component';
import { RegionListContainerComponent } from './components/region/list-container/list-container.component';
import { CountryListContainerComponent } from './components/country/list-container/list-container.component';
import { ListSelectComponent } from './components/list-select/list-select.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DetailsContainerComponent,
        DetailsUiComponent,
        RegionListContainerComponent,
        ListSelectComponent,
        CountryListContainerComponent
      ],
      providers: [ provideMockStore() ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
