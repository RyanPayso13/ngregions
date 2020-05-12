import { Component, Input } from '@angular/core';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {

  constructor() { }

  @Input()
  country: Country = null;

}
