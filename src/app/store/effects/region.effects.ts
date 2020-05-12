import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { RegionService } from '../../services/region.service';
import { RegionActions } from '../actions/region.actions';
import { CountryActions } from '../actions/country.actions';

@Injectable()
export class RegionEffects {

  loadCountriesByRegion$ = createEffect((region: string = '') => this.actions$.pipe(
    ofType(RegionActions.GetCountriesByRegion),
    switchMap((action) => this.regionService.getCountriesByRegion(action)
      .pipe(
        map(countries => ({ type: CountryActions.SetCountries, payload: countries })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private regionService: RegionService
  ) {}
}
