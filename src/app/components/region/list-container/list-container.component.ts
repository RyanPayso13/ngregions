import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from 'src/models/region.model';
import { Store, select } from '@ngrx/store';
import { getCountriesByRegion } from 'src/app/store/actions/region.actions';

@Component({
  selector: 'app-region-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  regions$: Observable<Region>

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.regions$ = this.store.pipe(select(state => state.region.regions));
  }

  onChanged(value: string): void {
    this.store.dispatch(getCountriesByRegion({ payload: value }))
  }
}
