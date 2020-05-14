import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getCountriesByRegion } from 'src/app/store/actions/region.actions';
import { resetCountries } from 'src/app/store/actions/country.actions';
import * as selectors from '../../../store/selectors/region.selector';

@Component({
  selector: 'app-region-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class RegionListContainerComponent implements OnInit {
  regions$: Observable<Array<string>>

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.regions$ = this.store.pipe(select(selectors.selectAllRegions));
  }

  onChanged(value: string): void {
    this.store.dispatch(value !== '' ? getCountriesByRegion({ payload: value }) : resetCountries());
  }
}
