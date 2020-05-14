import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromRegion from './store/reducers/region.reducer';
import * as fromCountry from './store/reducers/country.reducer';

import { RegionEffects } from './store/effects/region.effects';

import { DetailsContainerComponent } from './components/country/details-container/details-container.component';
import { DetailsUiComponent } from './components/country/details-ui/details-ui.component';
import { RegionListContainerComponent } from './components/region/list-container/list-container.component';
import { CountryListContainerComponent } from './components/country/list-container/list-container.component';
import { ListSelectComponent } from './components/list-select/list-select.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsContainerComponent,
    DetailsUiComponent,
    RegionListContainerComponent,
    ListSelectComponent,
    CountryListContainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    EffectsModule.forRoot([RegionEffects]),
    StoreModule.forRoot({
      region: fromRegion.reducer,
      country: fromCountry.reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
