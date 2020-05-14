import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/models/country.model';
import { Store, select } from '@ngrx/store';
import * as selectors from '../../../store/selectors/country.selector';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss']
})
export class DetailsContainerComponent implements OnInit {
  country$: Observable<Country>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.country$ = this.store.pipe(select(selectors.selectCountry));
  }

}
