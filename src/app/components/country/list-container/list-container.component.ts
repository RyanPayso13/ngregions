import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as selectors from '../../../store/selectors/country.selector';
import { setSelectedCountry } from 'src/app/store/actions/country.actions';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class CountryListContainerComponent implements OnInit {
  countryNames$: Observable<Array<String>>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.countryNames$ = this.store.pipe(select(selectors.selectAllCountryNames));
  }

  onChanged(value: string): void {
    this.store
        .pipe(select(selectors.selectCountryByName, value ))
        .subscribe(country => this.store.dispatch(setSelectedCountry({ payload: country })));
  }

}
