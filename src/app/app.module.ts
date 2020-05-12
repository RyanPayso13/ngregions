import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromRegion from '../store/reducers/region.reducer';
import * as fromCountry from '../store/reducers/country.reducer';

import { DetailsContainerComponent } from './components/country/details-container/details-container.component';
import { DetailsUiComponent } from './components/country/details-ui/details-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsContainerComponent,
    DetailsUiComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      region: fromRegion.reducer,
      country: fromCountry.reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
